import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    taskName: { type: String, required: true },
    taskDescription: { type: String },
    project: { type: String, required: true },
    taskType: { type: String },
    priority: { type: String, required: true },
    taskStatus: { type: String, required: true },
    assignee: { type: String },
    dueDate: { type: Date, required: true },
    labels: { type: String }
});

export const Task = mongoose.model("Task", taskSchema);
