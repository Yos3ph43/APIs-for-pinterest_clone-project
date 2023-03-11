const express = require("express");
const { getPicByUserId, deletePicByPictureId, createPic, uploadPic } = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getPicByUserId/:user_id", getPicByUserId);
picRoute.delete("/deletePicByPictureId/:picture_id", deletePicByPictureId)
picRoute.post("/createPic/:user_id", uploadPic.single("data"), createPic)

module.exports = picRoute;