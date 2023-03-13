const express = require("express");
const { checkToken } = require("../controllers/authController");
const {
  getPicById,
  getSavePic,
  addComment,
  getPicComment,
  getPicByName,
  getAllPic,
} = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getAllPic", checkToken, getAllPic);
picRoute.get("/getPicById/:picture_id", checkToken, getPicById);
picRoute.get("/getPicByName/:pic_name", checkToken, getPicByName);
picRoute.get("/getSavePic/:picture_id", checkToken, getSavePic);
picRoute.get("/getPicComment/:picture_id", checkToken, getPicComment);
picRoute.post("/addComment", checkToken, addComment);

module.exports = picRoute;
