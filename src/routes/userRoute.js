const express = require("express");
const userRoute = express();

const { getUser, updateUser, uploadAvatar } = require("../controllers/userController");

userRoute.get("/getUser", getUser);
userRoute.put("/updateUser/:user_id", uploadAvatar.single("data"),updateUser);

module.exports = userRoute;
