require("dotenv").config();
const bcrypt = require("bcrypt");
const userModel = require("../models/user.schema.js");
const { generateAccessToken, generateRefreshToken } = require("../utils/generateTokens.js");
const jwt = require("jsonwebtoken");
const registerService = async (userData) => {
    try {
        const { username, password, email } = userData;
        if (!username || !password || !email) {
            throw new Error("Username, password, and email are required");
        }

        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            throw new Error("User already exists");
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
const loginService = async (userData) => {
    const { email, password } = userData;
    if (!email || !password) {
        throw new Error("Email and password are required");
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    user.refreshToken = refreshToken;
    await user.save();
    return { user, accessToken, refreshToken };
}

const getAcessTookenService = async (refreshToken) => {
    try {
        const decode=jwt.verify(refreshToken,process.env.JWT_SECRET_REFRESH);
        if(!decode){
            throw new Error("Invalid refresh token");
        }
        const userId=decode.id;
        const user=await userModel.findById(userId);
        if(!user || user.refreshToken !== refreshToken){
            throw new Error("Invalid refresh token");
        }
        const newAccessToken=generateAccessToken(userId);
        return newAccessToken;
    }
    catch (error) {
        throw new Error("Error generating access token: " + error.message);
    }
}
module.exports = {
    registerService,
    loginService,
    getAcessTookenService
}
