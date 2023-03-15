const express = require("express");
const userRoute = express();
const { checkToken } = require("../controllers/authController");
const { upload } = require("../controllers/uploadController");

const {
  getUser,
  signUp,
  login,
  uploadAvatar,
} = require("../controllers/userController");

userRoute.get("/getUser", checkToken, getUser);

userRoute.post("/signup", signUp);
userRoute.post("/login", login);
userRoute.post(
  "/uploadAvatar/:user_id",
  checkToken,
  upload.single("data"),
  uploadAvatar
);

module.exports = userRoute;
