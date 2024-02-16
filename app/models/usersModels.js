const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  UserName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
