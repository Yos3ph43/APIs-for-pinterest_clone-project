const express = require("express");
const { getPic } = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getPic/:picture_id", getPic);

module.exports = picRoute;
