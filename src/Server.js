import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./configs/db-config.js";
import authRoutes from "./controllers/auth/routes/auth-route.js";

const app = express();
const PORT = process.env.PORT || 9000;

connectDB();
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth/v1', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});