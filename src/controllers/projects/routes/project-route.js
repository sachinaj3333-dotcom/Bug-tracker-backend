import express from "express";
import authMiddleware from "../../../utils/middleware/authentication.js";
import addProject from "../addproject-api.js";
import getAllProject from "../getallprojects-api.js";


const projectRoutes = express.Router();

projectRoutes.post('/add-project', authMiddleware, addProject);
projectRoutes.get('/get-all-projects', authMiddleware, getAllProject);


export default projectRoutes;