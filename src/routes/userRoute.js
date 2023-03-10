const express = require("express");
const userRoute = express();

const { getUser, updateUser } = require("../controllers/userController");

userRoute.get("/getUser", getUser);
userRoute.put("/updateUser/:user_id", updateUser);

module.exports = userRoute;
