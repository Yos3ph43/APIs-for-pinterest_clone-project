const express = require("express");
const picRoute = require("./picRoute");
const userRoute = require("./userRoute");
const bookmarkRoute = require("./bookmarkRoute");
const rootRoute = express();

rootRoute.use("/user", userRoute);
rootRoute.use("/pic", picRoute);
rootRoute.use("/bookmark", bookmarkRoute);

module.exports = rootRoute;
