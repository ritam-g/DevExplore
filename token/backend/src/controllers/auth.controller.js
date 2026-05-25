const bcrypt = require("bcrypt");
const { registerService , loginService, getAcessTookenService } = require("../services/auth.service.js");
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
        refreshToken,
        newUser,
    });
}
async function loginController(req, res) {
    const userData = req.body;
    const { user, accessToken, refreshToken } = await loginService(userData, res);
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
    return res.status(200).json({
        message: "User logged in successfully",
        accessToken,
        refreshToken,
        user
    });

}

async function refreshTokenController(req,res){
    const refreshToken=req.cookies.refreshToken;
    if(!refreshToken){
        return res.status(401).json({message:"Refresh token not found"});
    }
    try{
        const newAccessToken=await getAcessTookenService(refreshToken);
        res.cookie("accessToken", newAccessToken,
            {
                httpOnly: true, secure: true,
                maxAge: 10 * 60 * 1000, // 10 minutes
            });
        return res.status(200).json({message:"Access token refreshed successfully", accessToken: newAccessToken});
    }
    catch(error){
        return res.status(403).json({message:"Invalid refresh token"});
    }
}

module.exports = {
    registerController,
    loginController,
    refreshTokenController
}

