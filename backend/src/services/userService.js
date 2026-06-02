import { nanoid } from "nanoid";
import { createUser, getUserGmail } from "../repositories/userRepository.js";
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
