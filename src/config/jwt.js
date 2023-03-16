const jwt = require("jsonwebtoken");

const generateToken = (data) => {
  let token = jwt.sign(data, "nodejs28", { expiresIn: "10m" });
  return token;
};

const verifyToken = (input) => {
  let verify = jwt.verify(input, "nodejs28");
  return verify;
};

const deToken = (input) => {
  let decoded = jwt.decode(input);
  return decoded;
};

module.exports = {
  generateToken,
  verifyToken,
  deToken,
};
