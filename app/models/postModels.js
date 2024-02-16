const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  postComplete: {
    type: String,
  },
  postResume: {
    type: String,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
const post = mongoose.model("post", postSchema);

module.exports = post;
