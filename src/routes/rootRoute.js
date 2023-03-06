const express = require("express");
const rootRoute = express();
const userRoute = require("./userRoute");

rootRoute.use("/user", userRoute);

module.exports = rootRoute;
