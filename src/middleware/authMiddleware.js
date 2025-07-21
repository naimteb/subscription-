import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("token", token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  req.user = decoded;
  console.log(req.user);
  next();
};
