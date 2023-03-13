const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();
const { checkToken } = require("./authController");

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
    console.log(error);
    // res.send(error.message);
    res.status(400).send(error);
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

module.exports = {
  getPicById,
  getSavePic,
  addComment,
  getPicComment,
  getPicByName,
  getAllPic,
};
