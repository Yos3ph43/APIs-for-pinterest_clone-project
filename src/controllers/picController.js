const { PrismaClient } = require("@prisma/client");
const model = new PrismaClient();

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
    let data = await model.picture.delete({
      where: {
        picture_id: Number(req.params.picture_id),
      },
    });
    res.send({ message: "Xóa ảnh thành công!", data });
  } catch (error) {
    res.send(error.message);
  }
};


module.exports = {
  getPicByUserId,
  deletePicByPictureId,
};
