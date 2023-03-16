const express = require("express");
const { upload } = require("../controllers/uploadController");
const picRoute = express();

const {
  getPicByUserId,
  deletePicByPictureId,
  createPic,
} = require("../controllers/picController");
const {
  getPicById,
  getSavePic,
  addComment,
  getPicComment,
  getPicByName,
  getAllPic,
} = require("../controllers/picController");
const {
  checkToken,
  checkTokenInBody,
} = require("../controllers/authController");

picRoute.get("/getPicByUserId/:user_id", getPicByUserId);
picRoute.delete("/deletePicByPictureId/:picture_id", deletePicByPictureId);
picRoute.post(
  "/createPic/:user_id",
  upload.single("data"),
  checkTokenInBody,
  createPic
);
picRoute.get("/getAllPic", checkToken, getAllPic);
picRoute.get("/getPicById/:picture_id", checkToken, getPicById);
picRoute.get("/getPicByName/:pic_name", checkToken, getPicByName);
picRoute.get("/getSavePic/:picture_id", checkToken, getSavePic);
picRoute.get("/getPicComment/:picture_id", checkToken, getPicComment);
picRoute.post("/addComment", checkToken, addComment);

module.exports = picRoute;
