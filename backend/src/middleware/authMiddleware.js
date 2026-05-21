import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      success: false,
      message: "You do not have a token!",
    });

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodeToken;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Your token invalid!",
    });
  }
};
