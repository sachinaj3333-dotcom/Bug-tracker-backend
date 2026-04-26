import { User } from "../../models/auth-model/User-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userLogin = async(req, res) => {
    try {
        const { userEmail, userPass } = req.body;
        const user = await User.findOne({ userEmail});

        if (!user) {
            return res.status(404).json({message: "User Not Found."});
        }

        const isValid = await bcrypt.compare(userPass, user.userPass);
        if (!isValid) {
            return res.status(401).json({message: "Invalid Credentials."});
        }

        const token = jwt.sign({_id: user._id, name: user.userName , email: user.userEmail}, "BUGTRACKERSACHIN27", { expiresIn: "1d"});
        return res.status(201).json({
            token: token,
            status: 200,
        });

    }catch (error) {
        console.log(error);
        res.status(500).json({error: "Server Error."});

    }
}

export default userLogin;