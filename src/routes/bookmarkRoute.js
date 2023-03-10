const express = require('express');
const { getBookmarkByUserId } = require('../controllers/bookmarkController');
const bookmarkRoute = express();

bookmarkRoute.get("/getBookmarkByUserId/:user_id", getBookmarkByUserId)

module.exports = bookmarkRoute;