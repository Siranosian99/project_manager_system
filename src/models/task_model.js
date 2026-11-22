import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { type: String, required: true },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: ['todo', 'in_progress', 'completed'],
        default: "todo"
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: "low"
    },
    startDate: {
        type: Date,
        required: true,
        min: new Date("2026-01-01"),
        max: new Date("2030-12-31"),
    },
    dueDate: {
        type: Date,
        required: true,
        validate:{
            validator:function(value){
                value>this.startDate
            },
            message:"Due date cannot be before start date"
        },
        min: new Date("2026-01-01"),
        max: new Date("2030-12-31"),
    },
    completedAt: {
        type: new Date
    },
}, { timestamps: true })
