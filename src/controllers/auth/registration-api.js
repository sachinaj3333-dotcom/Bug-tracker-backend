import bcrypt from "bcrypt";
import { User } from "../../models/auth-model/User-model.js";

const userRegistration =  async (req, res) => {
    try {
        const { userName, userEmail, userPass, confirmPass } = req.body;
        const hashedPass = await bcrypt.hash(userPass, 10);
        
        if (!userName || !userEmail || !userPass || !confirmPass) {
            return res.status(400).json({message: "All Fields are Required."});
        }

        const isEmail = await User.findOne({userEmail: userEmail});
        if (isEmail) {
            return res.status(409).json({message: "User Already Exist With This Email."});
        }

        const newUser = new User({userName, userEmail, userPass: hashedPass, confirmPass: hashedPass})
        await newUser.save();

        res.status(201).json({message: "User Created Successfully.", user: newUser});
    }catch (error) {
        console.log("Error Saving User", error);
        res.status(500).json({error: "Server Error."})
    }
}

export default userRegistration;