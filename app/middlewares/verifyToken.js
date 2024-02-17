const Users = require("../models/usersModels");
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers["token"];
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        res.status(401).send({ message: "nao autorizado token" });
        return;
      } else {
        const userExist = await Users.findOne({ _id: decoded.userId });
        console.log(decoded);
        if (userExist) {
          next();
        }
      }
    });
  } else {
    res.status(401).send({ message: "nao autorizado" });
  }
}

module.exports = verifyToken;
