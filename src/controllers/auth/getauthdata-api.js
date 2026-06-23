import { Project } from "../../models/Project-modal/Project-modal.js";


const authData = async(req, res) => {
    try {
        const authUser = req.user;
        const projects = await Project.find({ownerId: authUser._id}).sort({createdAt: -1});
        // const userDetail = authUser;
        // console.log(userDetail);
        res.status(200).json({count: projects.length, projects, status: 200, message: "All projects found."})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default authData;