import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, unique: true, required: true },
    userPass: { type: String, required: true },
    confirmPass: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);