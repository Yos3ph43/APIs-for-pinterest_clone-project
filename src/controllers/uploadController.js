const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, process.cwd() + "/public/img");
  },
  filename: (req, file, callback) => {
    const newFilename = Date.now() + "-" + file.originalname;
    callback(null, newFilename);
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
};
