const express = require("express");
const { getPicByUserId, deletePicByPictureId } = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getPicByUserId/:user_id", getPicByUserId);
picRoute.delete("/deletePicByPictureId/:picture_id", deletePicByPictureId)

module.exports = picRoute;