import express from "express";
import Task from "../models/task_model.js"
export async function createTask(req, res) {
  try {
    const {name,description,project,assignedTo,createdBy,status,priority,startDate,dueDate,completedAt}=req.body
    const task=  Task.create()
    if(){}
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
export async function getAllTasks() {
  try {
  } catch (e) {}
}
export async function getTaskById() {
  try {
  } catch (e) {}
}
export async function updateTask() {
  try {
  } catch (e) {}
}
export async function deleteTask() {
  try {
  } catch (e) {}
}
export async function assignTask() {
  try {
  } catch (e) {}
}
export async function updateTaskStatus() {
  try {
  } catch (e) {}
}
export async function updateTaskPriority() {
  try {
  } catch (e) {}
}
export async function updateTaskDeadline() {
  try {
  } catch (e) {}
}
