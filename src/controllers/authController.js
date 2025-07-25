import { asyncHandler } from "../middleware/asyncHandler.js";

import {
  registerUserService,
  loginUserService,
  logoutUserService,
  refreshTokenService,
} from "../services/authService.js";

export const registerUser = asyncHandler(async (req, res) => {
  const data = req.body;
  const user = await registerUserService(data);
  res.status(201).json({ message: "User created successfully", user });
});

export const loginUser = asyncHandler(async (req, res) => {
  const data = req.body;

  const token = await loginUserService(data);
  res.status(200).json({ message: "User logged in successfully", token });
});

export const logoutUser = asyncHandler(async (req, res) => {
  const data = req.body;
  const user = await logoutUserService(data);
  res.status(200).json({ message: "User logged out successfully", user });
});

export const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.body.refreshToken;
  console.log("refreshToken", refreshToken);
  const accessToken = await refreshTokenService(refreshToken);
  res
    .status(200)
    .json({ message: " access Token refreshed successfully", accessToken });
});
