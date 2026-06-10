import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName: { type: String, require: true },
    projectKey: { type: String, require: true },
    projectDescription: { type: String },
    projectIcon: {
        id: { type: String, require: true },
        iconClass: { type: String, require: true },
        color: { type: String, require: true },
        bgColor: { type: String, require: true },
    },
    projectColor: {
        color: { type: String },
        bgColor: { type: String }
    },
    projectType: {
        id: { type: String },
        name: { type: String },
        description: { type: String },
        iconClass: { type: String },
    },
    projectPrivacy: {
        id: { type: String, require: true },
        name: { type: String, require: true },
        description: { type: String, require: true },
        iconClass: { type: String, require: true },
    },
    teamMembers: { type: String },
    ownerId: { type: String },
    projectStatus: { type: String },
    totalTasks: { type: Number },
})

export const Project = mongoose.model("Project", projectSchema);