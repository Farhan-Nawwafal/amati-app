import { nanoid } from "nanoid";
import { createUser, getUserGmail, getUserById, updateUserProfileData } from "../repositories/userRepository.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { signToken } from "../utils/jwt.js";
import { calculateAge } from "../utils/calculateAge.js";

export const addUser = async (data) => {
  // check email duplication
const existingGmail = await getUserGmail(data.gmail);
  if (existingGmail) throw new Error(`Gmail ${data.gmail} already exist!`);

  const userAge = calculateAge(data.birth_date);
  const hashedPassword = await hashPassword(data.password);

  const userPayload = {
    id: nanoid(),
    name: data.name,
    role: data.role,
    gmail: data.gmail,
    password: hashedPassword,
    birth_date: new Date(data.birth_date).toISOString(),
  };

  const savedUser = await createUser(userPayload);

  return {
    user: savedUser,
    age: userAge,
  };
};

export const checkUser = async (data) => {
const user = await getUserGmail(data.gmail);
  if (!user) throw new Error(`Invalid email or password!`);

  const isMatchPassword = await comparePassword(data.password, user.password);
  if (!isMatchPassword) throw new Error(`Invalid email or password!`);

  const tokenPayload = {
    id: user.id,
    gmail: user.gmail,
    name: user.name,
  };

  const token = signToken(tokenPayload);

  return { token, ...user };
};

export const findUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) throw new Error("User not found!");
  return user;
};

export const modifyUserProfile = async (userId, updateData) => {
  // 1. Validasi apakah user-nya ada
  const user = await getUserById(userId);
  if (!user) throw new Error("User not found!");

  // 2. Siapkan wadah data yang mau di-update
  const updatePayload = {};

  if (updateData.name) updatePayload.name = updateData.name;
  if (updateData.birthDate) updatePayload.birth_date = new Date(updateData.birthDate).toISOString();
  
  // Jika frontend mengirim email baru dan itu berbeda dengan email lama, cek duplikasi
  if (updateData.email && updateData.email !== user.gmail) {
    const emailExist = await getUserGmail(updateData.email);
    if (emailExist) throw new Error(`Gmail ${updateData.email} already in use!`);
    updatePayload.gmail = updateData.email;
  }

  // Jika siswa mengetik password baru (bukan placeholder bintang atau teks kosong)
  if (updateData.password && !updateData.password.includes('***') && updateData.password.trim() !== '') {
    updatePayload.password = await hashPassword(updateData.password);
  }

  // 3. Lempar payload bersih ke lapisan Repository Prisma
  return await updateUserProfileData(userId, updatePayload);
};
