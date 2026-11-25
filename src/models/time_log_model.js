import mongoose from "mongoose";
const timeLogSchema = new mongoose.Schema(
  {
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startTime: {
      type: Date,
      default: Date.now,
    },
    endTime: {
      type: Date,
    },
    duration: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const TimeLog = mongoose.model("TimeLogSchema", timeLogSchema);
export default TimeLog;
