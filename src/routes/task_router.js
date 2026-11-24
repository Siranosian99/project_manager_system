import {
  getTaskById,
  updateTask,
  deleteTask,
  getTasks,
} from "../controllers/task_controller";

import express from "express";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;