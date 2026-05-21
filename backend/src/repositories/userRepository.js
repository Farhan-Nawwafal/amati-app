import prisma from "../config/prisma.js";

export const createUser = async (data) =>
  await prisma.user.create({
    data: {
      id: data.id,
      name: data.name,
      role: data.role,
      gmail: data.gmail,
      password: data.password,
      birth_date: data.birth_date,
    },
  });

export const getUserGmail = async (data) =>
  await prisma.user.findFirst({
    where: { gmail: data.gmail },
  });

export const getUserData = async (data) =>
  await prisma.user.findFirst({
    where: {
      OR: [{ name: data.name }, { gmail: data.gmail }],
    },
    select: {
      id: true,
      name: true,
      gmail: true,
      password: true,
      birth_date: true,
      role: true,
    },
  });
