const express = require("express");
const {
  getPic,
  getSavePic,
  addComment,
} = require("../controllers/picController");
const picRoute = express();

picRoute.get("/getPic/:picture_id", getPic);
picRoute.get("/getSavePic/:picture_id", getSavePic);
picRoute.post("/addComment", addComment);

module.exports = picRoute;
