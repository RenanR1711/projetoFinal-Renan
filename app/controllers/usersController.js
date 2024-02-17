const User = require("../models/usersModels");
const bcrypt = require("bcrypt");

async function createUsers(req, res) {
  const { UserName, email, password } = req.body;
  const API_KEY = req.headers["api_key"];
  console.log(API_KEY);
  if (API_KEY !== "minha_chave_secreta") {
    res.status(401).send({ message: "nao autorizado" });
    return;
  }
  const hasPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({
      UserName: UserName,
      email: email,
      password: hasPassword,
    });
    await newUser.save();
    res.status(201).send({ message: "usuario criado com susseço" });
  } catch (error) {
    res.send({ message: "deu pau no usuario" });
  }
}
async function readAllUsers(req, res) {
  try {
    const listUsers = await User.find();
    res.send({ date: listUsers });
  } catch (error) {
    console.log(error);
    res.send({ menssage: "deu pau na lista dos usuarios!" });
  }
}

async function updateUsers(req, res) {
  const userBody = req.body;
  const { UserName, email, password } = req.body;
  try {
    console.log(req.params.id);
    const mongoPayload = {
      UserName: UserName,
      email: email,
      password: password,
    };
    const userUpdated = await User.findByIdAndUpdate(
      req.params.id,
      mongoPayload,
      { new: true }
    );
    console.log(userUpdated);
    res.send({ message: "usuario atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "usuario não encontrado!" });
  }
}
async function deleteUsers(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ menssage: "usuario deletado com sucesso!" });
  } catch (error) {}
}

module.exports = {
  createUsers,
  readAllUsers,
  updateUsers,
  deleteUsers,
};
