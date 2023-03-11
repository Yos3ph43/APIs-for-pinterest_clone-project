const express = require("express");
const {
  getPic,
  getSavePic,
  addComment,
  getPicComment,
} = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getPic/:picture_id", getPic);
picRoute.get("/getSavePic/:picture_id", getSavePic);
picRoute.get("/getPicComment/:picture_id", getPicComment);
picRoute.post("/addComment", addComment);

module.exports = picRoute;
