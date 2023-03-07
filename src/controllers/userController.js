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

module.exports = {
  getUser,
};
