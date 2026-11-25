import mongoose from "mongoose";
const notificationSchema = new mongoose.Schema(
  {
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: [
        "task_assigned",
        "task_commented",
        "team_invitation",
        "project_invitation",
        "deadline_reminder",
        "task_updated",
        "task_completed",
        "comment_reply",
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    isRead: {
      type: Boolean,
      default: false,
      required: true,
    },
    readAt: {
      type: Date,
    },
  },
  { timestamps: true },
);
const Notification = mongoose.model("notificationSchema", notificationSchema);
export default Notification;
