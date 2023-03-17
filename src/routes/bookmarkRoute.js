const express = require('express');
const { getBookmarkByUserId } = require('../controllers/bookmarkController');
const bookmarkRoute = express();
const {
    checkToken,
} = require("../controllers/authController");

bookmarkRoute.get("/getBookmarkByUserId/:user_id", checkToken, getBookmarkByUserId)

module.exports = bookmarkRoute;