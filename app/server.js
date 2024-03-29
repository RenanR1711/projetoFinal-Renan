const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const postRoutes = require("./routes/postRoutes");
const worksRoutes = require("./routes/worksRoutes");
const dotenv = require("dotenv");
require("dotenv").config();

const PORT = 3000;

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conectamos no mongo");
  } catch (error) {
    console.log("deu pau no mongo");
  }
}

connectMongo();

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/works", worksRoutes);

app.listen(PORT, () => {
  console.log("MINHA APLICAÇAO EXPRESS");
});
