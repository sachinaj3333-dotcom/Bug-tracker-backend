import express from "express";
import authMiddleware from "../../../utils/middleware/authentication.js";
import addTask from "../addtask-api.js";

const taskRoutes = express.Router();

taskRoutes.post('/add-task', authMiddleware, addTask);

export default taskRoutes;