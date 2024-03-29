const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const getPicById = async (req, res) => {
  try {
    let { picture_id } = req.params;
    let data = await model.picture.findMany({
      where: {
        picture_id: Number(picture_id),
      },
      include: {
        user: true,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getAllPic = async (req, res) => {
  try {
    let data = await model.picture.findMany({});
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const getPicByName = async (req, res) => {
  try {
    let { pic_name } = req.params;
    let data = await model.picture.findMany({
      where: {
        picture_name: {
          contains: pic_name,
        },
      },
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getSavePic = async (req, res) => {
  try {
    let { picture_id } = req.params;
    let data = await model.picture.findMany({
      where: {
        picture_id: Number(picture_id),
      },
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getPicComment = async (req, res) => {
  try {
    let { picture_id } = req.params;
    let data = await model.comment.findMany({
      where: {
        picture_id: Number(picture_id),
      },
    });

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const addComment = async (req, res) => {
  try {
    let { user_id, picture_id, content } = req.body;
    let comment_date = new Date();
    let data = { user_id, picture_id, content, comment_date };
    await model.comment.create({ data });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//GET danh sách ảnh đã tạo theo user id
const getPicByUserId = async (req, res) => {
  try {
    let data = await model.picture.findMany({
      where: {
        user_id: Number(req.params.user_id),
      },
      include: {
        user: true,
      },
    });
    res.send({ message: "Danh sách ảnh đã tạo theo user id:", data });
  } catch (error) {
    res.send(error.message);
  }
};

//DELETE ảnh đã tạo theo picture_id
const deletePicByPictureId = async (req, res) => {
  try {
    const picture_id = Number(req.params.picture_id);
    const data = await model.picture.findUnique({ where: { picture_id }});
    if (!data) {
      return res.status(404).send({ message: "Không tìm thấy ảnh!" });
    }
    await model.bookmark.deleteMany({ where: { picture_id }});
    await model.comment.deleteMany({ where: { picture_id }});
    await model.picture.delete({ where: { picture_id }});
    res.send({ message: "Xóa ảnh thành công!", data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Đã xảy ra lỗi khi xóa ảnh!" });
  }
};

//POST thêm một ảnh theo user
const createPic = async (req, res) => {
  try {
    const file = req.file;
    const user_id = Number(req.params.user_id);
    const picture_name = file.filename;
    const source = `http://localhost:8080/public/img/${file.filename}`;
    const desc = "Desc of " + file.filename + "...";
    const data = { user_id, picture_name, source, desc };
    await model.picture.create({ data });
    res.send({ message: "Thêm ảnh thành công!", data });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getPicById,
  getSavePic,
  addComment,
  getPicComment,
  getPicByUserId,
  deletePicByPictureId,
  createPic,
  getAllPic,
  getPicByName,
};
