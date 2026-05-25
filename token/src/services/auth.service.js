const bcrypt = require("bcrypt");
const userModel = require("../models/user.schema.js");
const { generateAccessToken, generateRefreshToken } = require("../utils/generateTokens.js");
const registerService = async (userData, res) => {
    try {
        const { username, password, email } = userData;
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ username, password: hashedPassword, email });
        await newUser.save();
        // now token 
        const accessToken = generateAccessToken(newUser._id);
        const refreshToken = generateRefreshToken(newUser._id);

        return { newUser, accessToken, refreshToken };
    } catch (error) {
        throw new Error("Error registering user: " + error.message);
    }
}

module.exports = {
    registerService,
}
