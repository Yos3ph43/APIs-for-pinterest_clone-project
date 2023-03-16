const { verifyToken } = require("../config/jwt");

const checkToken = (req, res, next) => {
  try {
    let { token } = req.headers;
    if (!verifyToken(token)) return res.send("Unauthorized");
    return next();
  } catch (error) {
    res.status(401).send(error);
  }
};

const checkTokenInBody = (req, res, next) => {
  try {
    let { token } = req.body;
    if (!verifyToken(token)) return res.send("Unauthorized");
    return next();
  } catch (error) {
    res.status(401).send(error);
  }
};

module.exports = {
  checkToken,
  checkTokenInBody
};
