const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("."));
const cors = require("cors");
app.use(cors());

app.listen(8080);

const rootRoute = require("./routes/rootRoute");

app.use("/api", rootRoute);
