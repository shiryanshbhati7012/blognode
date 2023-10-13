import jwt from "jsonwebtoken";
import dotenv from "dotenv";



dotenv.config();

const verifyUserToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json("Unauthorized request");
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
        return res.status(401).json("Access denied. No token provided.");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.json({
            msg: "Invalid token",
            status: 401,
            err: err,
        });
    }
};

export default verifyUserToken;
