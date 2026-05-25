const { Router } = require("express");
const userModel = require("../models/user.schema.js");
const jwt = require("jsonwebtoken");
const authController = require("../controllers/auth.controller.js");


const authRouter = Router();

authRouter.post("/register", authController.registerController);

authRouter.post("/login", authController.loginController);

authRouter.get("/refresh-token", authController.refreshTokenController)

module.exports = authRouter;