const jwt = require("jsonwebtoken");
const generateAccessToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_ACCESS, {expiresIn: "10m"});
}
const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET_REFRESH, {expiresIn: "1d"});
}


module.exports = {generateAccessToken, generateRefreshToken};