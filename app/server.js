const express = require("express");
const mongoose = require("mongoose");
const app = express();
const usersRoutes = require("./routes/usersRoutes");
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

app.use("/api/v1/users", usersRoutes);

app.listen(PORT, () => {
  console.log("MINHA APLICAÇAO EXPRESS");
});
