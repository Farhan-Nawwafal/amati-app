import { addUser } from '../services/userService.js';

export const userRegister = async (req, res) => {
    try {
        const user = await addUser(req.body);
        return res.status(201).json({
            success: true, 
            message: 'Success to register!',
            data: {
                gmail: user.gmail,
                name: user.name,
                birth_date: user.birth_date,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(409).json({
            success: false,
            message: 'Failed to register!',
            error: error.message,
        });
    }
};
