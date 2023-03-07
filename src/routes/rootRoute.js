const express = require("express");
const picRoute = require("./picRoute");
const userRoute = require("./userRoute");
const rootRoute = express();

rootRoute.use("/user", userRoute);
rootRoute.use("/pic", picRoute);

module.exports = rootRoute;
