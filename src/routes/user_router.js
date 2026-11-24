import {
  updateProfile,
  updateAvatar,
  deleteAccount,
  getUserById,
} from "../controllers/user_controller";

import express from "express";

const router = express.Router();

router.patch("/profile", updateProfile);
router.patch("/avatar", updateAvatar);
router.delete("/account", deleteAccount);
router.get("/me", getUserById);

export default router;