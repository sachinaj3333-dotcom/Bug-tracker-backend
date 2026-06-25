import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./configs/db-config.js";
import authRoutes from "./controllers/auth/routes/auth-route.js";
import projectRoutes from "./controllers/projects/routes/project-route.js";
import taskRoutes from "./controllers/tasks/routes/task-route.js";

const app = express();
const PORT = process.env.PORT || 9000;

connectDB();
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth/v1', authRoutes);
app.use('/project/v1', projectRoutes);
app.use('/task/v1', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});