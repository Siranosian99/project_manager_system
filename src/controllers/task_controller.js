import express from "express";
import Task from "../models/task_model.js"
export async function createTask(req, res) {
  try {
    const {name,description,project,assignedTo,createdBy,status,priority,startDate,dueDate,completedAt}=req.body
    if(){}
  } catch (e) {
    res.status(500).json({
      message:,
    })
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
