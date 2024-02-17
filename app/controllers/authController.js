const Users = require("../models/usersModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUsers(req, res) {
  const { password, email } = req.body;
  try {
    const userExist = await Users.find({ email: email });
    if (!userExist) {
      res.status(401).send({ message: "credenciais invalidas" });
      return;
    }
    if (!bcrypt.compareSync(password, userExist[0].password)) {
      res.status(401).send({ message: "credenciais invalidas" });
      return;
    }
    const TOKEN = jwt.sign(
      {
        userId: userExist[0]._id,

        userEmail: userExist[0].email,
        Permission: true,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(201).send({ menssage: "login efetuado!", token: TOKEN });
  } catch (error) {
    console.log(error);
    res.send({ menssage: "deu pau no login!" });
  }
}

async function forgotPassword(req, res) {
  try {
    res.status(201).send({ menssage: "usuario criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.send({ menssage: "deu pau no no usuario!" });
  }
}

module.exports = {
  loginUsers,
  forgotPassword,
};
