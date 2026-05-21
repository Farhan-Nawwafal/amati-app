import { addUser, checkUser } from "../services/userService.js";

export const userRegister = async (req, res) => {
  try {
    const { user, age } = await addUser(req.body);
    return res.status(201).json({
      success: true,
      message: "Success to register!",
      data: {
        gmail: user.gmail,
        name: user.name,
        age,
        role: user.role,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    return res.status(409).json({
      success: false,
      message: "Failed to register!",
      error: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const user = await checkUser(req.body);
    return res.status(200).json({
      success: true,
      message: "Success to login!",
      user: {
        id: user.id,
        gmail: user.gmail,
        name: user.name,
        age: user.birth_date,
        role: user.role,
        token: user.token,
      },
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Failed to login!",
      error: error.message,
    });
  }
};
