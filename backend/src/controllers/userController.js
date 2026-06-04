import { addUser, checkUser, findUserById, modifyUserProfile } from "../services/userService.js";

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

export const getUserProfile = async (req, res) => {
  try {
    // Mengambil userId yang lolos dari dekripsi authMiddleware kamu
    // Jika middleware kamu menaruhnya di req.user.id, sesuaikan di sini
    const userId = req.user?.id || req.body.userId; 

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized! User ID tidak ditemukan." });
    }

    const user = await findUserById(userId);
    return res.status(200).json({
      success: true,
      name: user.name,
      birthDate: user.birth_date,
      email: user.gmail,
      // Preferensi notifikasi bawaan (jika ada di database, panggil kolomnya di sini)
      emailNotif: user.email_notif ?? true,
      examReminder: user.exam_reminder ?? true,
      courseUpdate: user.course_update ?? true
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile!",
      error: error.message,
    });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized!" });
    }

    // Panggil service untuk melakukan update data di Prisma
    const updatedUser = await modifyUserProfile(userId, req.body);

    return res.status(200).json({
      success: true,
      message: "Profile successfully updated!",
      data: {
        name: updatedUser.name,
        birthDate: updatedUser.birth_date,
        email: updatedUser.gmail
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to update profile!",
      error: error.message,
    });
  }
};