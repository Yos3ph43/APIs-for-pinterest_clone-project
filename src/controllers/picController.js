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
    res.send(data);
  } catch (error) {
    console.log(error);
    // res.send(error.message);
    res.send(error);
  }
};

module.exports = {
  getPic,
};
