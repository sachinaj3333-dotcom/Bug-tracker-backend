import express from "express";
import userRegistration from "../registration-api.js";
import userLogin from "../login-api.js";
import authData from "../getauthdata-api.js";
import authMiddleware from "../../../utils/middleware/authentication.js";

const authRoutes = express.Router();

authRoutes.post("/sign-up", userRegistration);
authRoutes.post("/sign-in", userLogin);
authRoutes.get("/get-auth-data",authMiddleware, authData);

export default authRoutes;

