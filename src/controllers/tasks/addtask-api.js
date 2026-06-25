import { Task } from "../../models/Task-modal/Task-modal.js";

const addTask = async (req, res) => {
    try {
        const authUser = req.user;
        const authId = authUser._id;
        const formData = req.body;

        const { taskName, taskDescription, project, taskType, priority, taskStatus, assignee, dueDate, labels } = req.body;
        if (!taskName || !project || !priority || !taskStatus || !assignee || !dueDate) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newTask = new Task({
            taskName,
            taskDescription,
            project,
            taskType,
            priority,
            taskStatus,
            assignee,
            dueDate,
            labels,
        });

        const savedTask = await newTask.save();

        return res.status(201).json({ message: "New Task Created.", task: savedTask, status: 201 });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default addTask;