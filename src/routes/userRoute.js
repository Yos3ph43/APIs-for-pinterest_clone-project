const express = require("express");
const userRoute = express();

const { getUser } = require("../controllers/userController");

userRoute.get("/getUser", getUser);

module.exports = userRoute;
