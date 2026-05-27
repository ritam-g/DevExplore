const { Router } = require("express");
const userModel = require("../models/user.schema.js");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth.controller.js");
const authMiddleware = require("../middleware/auth.middleware.js");


const authRouter = Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

authRouter.get("/refresh-token", authController.refreshTokenController)

authRouter.get('/me',authMiddleware,async (req, res) => {
    console.log(req.user)
    return res.status(200).json({ user:req.user }); 
});

module.exports = authRouter;