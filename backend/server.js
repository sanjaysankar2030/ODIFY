const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/odify");

app.use("/api/od", require("./routes/odRoutes"));

app.listen(5000, () => console.log("Backend running"));
