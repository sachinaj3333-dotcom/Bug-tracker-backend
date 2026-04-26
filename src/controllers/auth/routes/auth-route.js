import express from "express";
import userRegistration from "../registration-api.js";
import userLogin from "../login-api.js";

const authRoutes = express.Router();

authRoutes.post("/sign-up", userRegistration);
authRoutes.post("/sign-in", userLogin);

export default authRoutes;

