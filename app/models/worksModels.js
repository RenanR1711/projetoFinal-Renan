const mongoose = require("mongoose");
const worksSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  worksComplete: {
    type: String,
  },
  worksResume: {
    type: String,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});
const works = mongoose.model("works", worksSchema);

module.exports = works;
