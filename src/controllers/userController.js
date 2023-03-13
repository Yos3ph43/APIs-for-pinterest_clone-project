const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();
const bcrypt = require("bcrypt");
const { generateToken } = require("../config/jwt");

const getUser = async (req, res) => {
  try {
    let data = await model.user.findMany();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const signUp = async (req, res) => {
  try {
    const { email, password, full_name, age, avatar } = req.body;
    const data = {
      email,
      password: bcrypt.hashSync(password, 11),
      full_name,
      age,
      avatar,
    };
    console.log(data);
    await model.user.create({ data });
    res.status(200).send("Signed up!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const checkEmail = await model.user.findFirst({ where: { email } });
    if (checkEmail) {
      const checkPassword = bcrypt.compareSync(password, checkEmail.password);
      const data = { ...checkEmail, password: "hidden" };
      if (!checkPassword) return res.status(200).send("Wrong password!");

      let token = generateToken({ data });
      console.log(JSON.stringify(checkEmail));
      res.status(200).send({ token, user: data });
    } else {
      res.status(200).send("Invalid mail!");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getUser,
  signUp,
  login,
};
