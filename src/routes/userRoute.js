const express = require("express");
const userRoute = express();
const { checkToken } = require("../controllers/authController");

const { getUser, signUp, login } = require("../controllers/userController");

userRoute.get("/getUser", checkToken, getUser);

userRoute.post("/signup", signUp);
userRoute.post("/login", login);

module.exports = userRoute;
