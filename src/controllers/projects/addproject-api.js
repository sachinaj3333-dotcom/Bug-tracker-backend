import { Project } from "../../models/Project-modal/Project-modal.js";

const addProject = async (req, res) => {
    try {
        const authUser = req.user;
        const authId = authUser._id;
        const formData = req.body;
        // console.log(formData);

        const { projectName, projectKey, projectDescription, projectIcon, projectColor, projectType, projectPrivacy, teamMembers, projectStatus, totalTasks } = req.body;
        if (!projectName || !projectKey || !projectDescription || !projectIcon || !projectColor || !projectType || !projectPrivacy) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newProject = new Project({
            projectName,
            projectKey,
            projectDescription,
            projectIcon,
            projectColor,
            projectType,
            projectPrivacy,
            teamMembers,
            ownerId : authId,
            projectStatus,
            totalTasks,
        });

        const savedProject = await newProject.save();

        return res.status(201).json({ message: "New Project created successfully.", project: savedProject, status: 201 });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default addProject;