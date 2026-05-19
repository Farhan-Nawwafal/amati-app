import prisma from '../config/prisma.js'

export const getAllUsers = async () => await prisma.user.findMany();

