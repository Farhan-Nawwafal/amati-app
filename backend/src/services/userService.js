import { getAllUsers } from '../repositories/userRepository.js';

export const getUsers = async () => {
    const result = await getAllUsers()
    if(!result.length) throw new Error('No user data yet!');
    return result;
};