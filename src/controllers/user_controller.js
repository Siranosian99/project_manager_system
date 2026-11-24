//- userController.js: Get Me, Update Profile, Update Avatar, Delete Account, Get User By ID.
import express from "express";
export async function getUser(req, res) {
  const userId = req.user.id;
  const email = req.body.email.toLowerCase();
  try {
    const userCheck = await User.findOne({ email: email });
    if (!userCheck) {
      return res.status(404).json({
        message: "User Didnt found",
      });
    }
    res.status(200).json({
      message: "User Data fetched",
      userCheck,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function updateProfile(req, res) {
  const userId = req.user.id;
  const name = req.body.name;
  const lastname = req.body.lastname;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name: name, lastname: lastname },
      { new: true, runValidators: true },
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User Didnt found",
      });
    }
    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function updateAvatar(req, res) {
  const userId = req.user.id;
  const avatar = req.body.avatarLink;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { avatar: avatar },
      { new: true, runValidators: true },
    );
    if (!updatedUser) {
      return res.status(404).json({
        message: "User didnt found",
      });
    }
    return res.status(200).json({
      message: "Profile Avatar updated successfully",
      user: updatedUser,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function deleteAccount(req, res) {
  const userId = req.user.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        message: "User didnt found",
      });
    }
    return res.status(200).json({
      message: "Account Deleted Successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function getUserById(req, res) {
  const userId = req.user.id;
  try {
    const userFind = await User.findById(userId);
    if (!userFind) {
      return res.status(404).json({
        message: "User didnt found",
      });
    }
    return res.status(200).json({
      message: "User get Successfully",
      userFind,
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}