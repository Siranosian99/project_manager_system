import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed'],
    default: 'pending'
  },
  startDate: {
    type: Date,
    required: true,
    min: new Date("2026-01-01"),
    max: new Date("2030-12-31"),
  },
  endDate: {
    type: Date,
    required: true,
    min: new Date("2026-01-01"),
    max: new Date("2030-12-31"),
    validate: {
      validator: function (value) {
        value > this.startDate
      },
      message: "Due date cannot be before start date"
    },
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  },
  tasks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: true,
  },
}, {
  timestamps: true,
})

const Project = mongoose.model("Project", projectSchema);
