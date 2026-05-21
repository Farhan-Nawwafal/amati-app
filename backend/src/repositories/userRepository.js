import prisma from '../config/prisma.js'

export const createUser = async data => await prisma.user.create({
    data: {
        id: data.id,
        name: data.name,
        role: data.role,
        gmail: data.gmail,
        password: data.password,
        birth_date: new Date(data.birth_date), 
        created_at: data.created_at ? new Date(data.created_at) : undefined,
        updated_at: data.updated_at ? new Date(data.updated_at) : undefined
    }
});

export const  getUsersName = async () => await prisma.user.findMany({
    select: { name: true }
});

export const getUserGmail = async () => await prisma.user.findMany({
    select: { gmail: true }
});

