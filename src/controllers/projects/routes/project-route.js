import express from "express";
import authMiddleware from "../../../utils/middleware/authentication.js";
import addProject from "../addproject-api.js";


const projectRoutes = express.Router();

projectRoutes.post('/add-project', authMiddleware, addProject);


export default projectRoutes;