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
        
        // now token 
        const accessToken = generateAccessToken(newUser._id);
        const refreshToken = generateRefreshToken(newUser._id);
        newUser.refreshToken = refreshToken;
        await newUser.save();
        
        return { newUser, accessToken, refreshToken };
    } catch (error) {
        throw new Error("Error registering user: " + error.message);
    }
}
const loginService = async (userData, res) => {
    const { email, password } = userData;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();
    return { user, accessToken, refreshToken };
}

module.exports = {
    registerService,
    loginService,
}
