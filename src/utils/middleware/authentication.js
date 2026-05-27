import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: "Access Denied." });
    }

    try {
        const bearerToken = token.slice(7, token.length);

        const decode = jwt.verify(bearerToken, "BUGTRACKERSACHIN27");
        // console.log(decode);

        req.user = decode;
        next();
    } catch (error) {
        // Token Expired
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                message: "Token Expired"
            });
        }

        // Invalid Token
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }

        // Other Errors
        return res.status(500).json({
            message: "Authentication Failed"
        });
    }
}

export default authMiddleware;