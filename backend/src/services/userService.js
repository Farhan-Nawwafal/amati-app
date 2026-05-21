import { createUser, getUserGmail, getUsersName } from '../repositories/userRepository.js';
import { nanoid } from 'nanoid';

export const addUser = async data => {
    const allName = await getUsersName();
    const allGmail = await getUserGmail();
    // cek duplikasi username dan email
    const isDuplicateGmail = allGmail.filter(user => user.gmail === data.gmail.toLowerCase());
    const isDuplicateName = allName.filter(usn => usn.name.toLowerCase() === data.name.toLowerCase());
    if(isDuplicateGmail.length) throw new Error(`Gmail ${data.gmail} already exist!`);
    if(isDuplicateName.length) throw new Error(`Name ${data.name} already exist!`);
    
    const user = {id: nanoid(), ...data};
    return createUser(user);
};