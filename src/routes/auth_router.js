import {
    register,
    logOut,
    login,
    verifyEmail,
    resetPassword,
    refreshToken,
} from "../controllers/auth_controller";

import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verifyEmail);
router.post("/resetPassword", resetPassword);
router.post("/refreshToken", refreshToken);
router.post("/logOut", logOut);



export default router;