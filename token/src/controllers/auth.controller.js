const bcrypt = require("bcrypt");
const { registerService } = require("../services/auth.service.js");
async function registerController(req, res) {


    const userData = req.body;
    const { newUser, accessToken, refreshToken } = await registerService(userData, res);
   

    res.cookie("accessToken", accessToken,
        {
            httpOnly: true, secure: true,
            maxAge: 10 * 60 * 1000, // 10 minutes
        });
    res.cookie("refreshToken", refreshToken,
        {
            httpOnly: true, secure: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        }
    );
    return res.status(201).json({
        message: "User registered successfully",
        accessToken,
        refreshToken
    });
}
async function loginController(req, res) {

}

module.exports = {
    registerController,
    loginController,
}

