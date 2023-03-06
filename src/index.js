const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));
const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routes/rootRoute");

//working api for test
// const { PrismaClient } = require("@prisma/client");
// const model = new PrismaClient();
// app.get("/user/getUser", async (req, res) => {
//   try {
//     let data = await model.user.findMany();
//     res.send(data);
//   } catch (error) {
//     res.send("Lỗi gì gòi :((");
//   }
// });

app.use("/api", rootRoute);
