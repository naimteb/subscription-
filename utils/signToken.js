import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signingBySecretAccessToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
};
export const signingBySecretRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
