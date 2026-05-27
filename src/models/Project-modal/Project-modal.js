import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    projectName: {type: String, require: true },
    projectKey: {type: String, require: true },
    projectDescription: {type: String},
    projectIcon: {type: String, require: true},
    projectColor: {type: String, require: true},
    projectType: {type: String},
    projectPrivacy: {type: String, require: true},
    teamMembers: {type: String},
    ownerId: {type: String},
    projectStatus: {type: String},
    totalTasks: {type: Number},
})

export const Project = mongoose.model("Project", projectSchema);