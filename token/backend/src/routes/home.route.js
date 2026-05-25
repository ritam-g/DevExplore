const { Router } = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/auth.middleware.js");

const homeRouter = Router();

homeRouter.get("/", authMiddleware, async (req, res) => {
    return res.status(200).json({ message: "Welcome to the home page!" });
});


module.exports = homeRouter;