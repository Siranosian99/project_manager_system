//authController.js: Register, Login, Verify Email, Reset Password, Refresh Token, Logout.
import express from "express";
import User from "../models/user_model.js";
export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const userCheck = await User.findOne({ email: email });
    if (!userCheck) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const user = User.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function login() {
  try {
  } catch (e) {}
}
export async function verifyEmail() {
  try {
  } catch (e) {}
}
export async function resetPassword() {
  try {
  } catch (e) {}
}
export async function refreshToken() {
  try {
  } catch (e) {}
}
export async function logOut() {
  try {
  } catch (e) {}
}
