require("dotenv").config();
const userModel = require("../models/user.schema.js");
const jwt = require("jsonwebtoken");
async function authMiddleware(req, res, next) {
    //! here we will check is the access token is valid or not and doest the id match with
        // ! the user id in the database or not
        const accessToken = req.cookies.accessToken;
    try {
        
        console.log("Access Token in Middleware:", accessToken); // Debugging line
        if (!accessToken) {
            return res.status(401).json({ message: "Access token not found" });
        }
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_ACCESS);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid access token" });
        }
        const userId = decoded.id;
        const user = await userModel.findById(userId);
        console.log(user)
        if (!user) {
            console.log(userId)
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        throw new Error("Error in authentication middleware: " + error.message);
    }
}

module.exports = authMiddleware;