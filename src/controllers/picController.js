const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

const getPic = async (req, res) => {
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

const getSavePic = async (req, res) => {
  try {
    let { picture_id } = req.params;
    let data = await model.picture.findMany({
      where: {
        picture_id: Number(picture_id),
      },
    });
    if ((data = [])) {
      return res.status(200).send(data);
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const addComment = async (req, res) => {
  try {
    let { user_id, picture_id } = req.body;
    let data = await model.picture.create({
      where: {
        picture_id: Number(picture_id),
      },
    });
    if ((data = [])) {
      return res.status(200).send(data);
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getPic,
  getSavePic,
  addComment,
};
