const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const getUser = async (req, res) => {
  try {
    let data = await model.user.findMany();
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
};

//PUT thông tin cá nhân của user
const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public/imgAvatar");
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + "-" + file.originalname
    cb(null, newFileName);
  },
});
const uploadAvatar = multer({ storage })

const updateUser = async (req, res) => {
  try {
    let avatar = req.file.filename;
    let age = Number(req.body.age);
    let { email, password, full_name } = req.body;
    let data = { email, password, full_name, age, avatar };
    await model.user.update({
      data, where: { user_id: Number(req.params.user_id) }
    });
    res.send({ message: "Update thành công!", data });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getUser,
  updateUser,
  uploadAvatar,
};
