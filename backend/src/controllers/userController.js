import { getUsers } from '../services/userService.js';

export const allUsers = async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json({
      success: true,
      message: "Success to get all users",
      data: users,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Failed to get all users",
      error: error.message,
    });
  }
};
