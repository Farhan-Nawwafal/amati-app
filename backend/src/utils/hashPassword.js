import bcrypt from "bcrypt";

export const hashPassword = async (password) => await bcrypt.hash(password, 4);
export const comparePassword = async (password, hashedPassword) =>
  await bcrypt.compare(password, hashedPassword);
