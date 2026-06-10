import { Project } from "../../models/Project-modal/Project-modal.js"

const getAllProject = async (req, res) => {
    try {
        // const projects = await Project.find({ userId: req.user._id}).sort({createdAt: -1});
        const projects = await Project.find().sort({createdAt: -1});
        res.status(200).json({count: projects.length, projects, status: 200, message: "All projects found successfully."})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

export default getAllProject;