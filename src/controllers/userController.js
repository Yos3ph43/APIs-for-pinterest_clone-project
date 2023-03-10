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
const updateUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let data = { email, password, full_name, age, avatar };
    await model.user.update({data, where: { user_id: Number(user_id) }
    });
    res.send({ message: "Update thành công!", data });
  } catch (error) {
    console.log(error.message);
    console.log(error);
    res.send(error.message);
  }
};

module.exports = {
  getUser,
  updateUser,
};
