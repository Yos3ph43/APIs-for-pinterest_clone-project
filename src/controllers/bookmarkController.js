const { PrismaClient } = require("@prisma/client")
const model = new PrismaClient();

//GET Danh sách ảnh đã lưu theo user id
const getBookmarkByUserId = async (req, res) => {
    // res.status(200).send("Get bookmark success!")
    try {
        let data = await model.bookmark.findMany({
            where: {
                user_id: Number(req.params.user_id)
            },
            include: {
                user: true
            }
        });
        res.send({ message: "Danh sách ảnh đã lưu theo user id:", data });
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    getBookmarkByUserId,
}