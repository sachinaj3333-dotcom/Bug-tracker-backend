import dotenv from "dotenv";
import {mongoose} from "mongoose";

dotenv.config();

const uri = process.env.DB_URL;

const connectDB = () => {
    mongoose.connect(uri)
        .then(() => {
            console.log("Successfully connected to the database");
        })
        .catch((error) => {
            console.log("Database connection error:", error);
        })
}

export default connectDB;