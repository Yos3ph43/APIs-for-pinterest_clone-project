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

//POST thêm một ảnh theo user
//yarn add multer => lấy hình từ FE lưu xuống BE
const multer = require("multer")
const storage = multer.diskStorage({
  //hàm destination nhận vào 3 tham số
  //1.req: nhận request từ FE gửi về
  //2.file: chứa thông tin hình ảnh mình úp lên (thuộc tính mở rộng, tên hình, dung lượng, lưu trữ ở đâu...)
  //3.cb: callback function nhận vào 2 tham số 
  //3.1: tham số trả lỗi, nếu không có trả lỗi thì ghi NULL
  //3.2: đường dẫn muốn lưu ở đâu
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/public/imgPic");
  },

  //hàm file name để đổi tên file hình đã nhận vào
  filename: (req, file, cb) => {
    const newFileName = Date.now() + "-" + file.originalname
    cb(null, newFileName);
  },
});
const uploadPic = multer({ storage })

const createPic = async (req, res) => {
  try {
    const file = req.file;
    const user_id = Number(req.params.user_id)
    const picture_name = file.filename
    const source = `http://localhost:8080/public/imgPic/${file.filename}`
    const desc = "Desc of " + file.filename + "..."
    const data = { user_id, picture_name, source, desc }
    await model.picture.create({ data });
    // res.send(file)
    res.send({ message: "Thêm ảnh thành công!", data });
  } catch (error) {
    request.send(error.message)
  }
}

module.exports = {
  getPicByUserId,
  deletePicByPictureId,
  createPic,
  uploadPic,
};
