const express = require("express");
const userRoute = express();
const {
  checkToken,
  checkTokenInBody,
} = require("../controllers/authController");
const { upload } = require("../controllers/uploadController");
const {
  getUser,
  signUp,
  login,
  uploadAvatar,
  updateUser,
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
userRoute.put(
  "/updateUser/:user_id",
  upload.single("data"),
  checkTokenInBody,
  updateUser
);

module.exports = userRoute;
