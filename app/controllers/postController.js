const Post = require("../models/postModels");

async function createPost(req, res) {
  const { title, postComplete, postResume, category, createdAt } = req.body;
  try {
    const newPost = new Post({
      title: title,
      postComplete: postComplete,
      postResume: postResume,
      category: category,
      createdAt: createdAt,
    });
    await newPost.save();
    res.status(201).send({ message: "Postagem criado com susseço" });
  } catch (error) {
    res.send({ message: "deu pau na postagem" });
  }
}
async function readAllPost(req, res) {
  try {
    const listPost = await Post.find();
    res.send({ date: listPost });
  } catch (error) {
    console.log(error);
    res.send({ menssage: "deu pau na lista de postagem" });
  }
}

async function updatePost(req, res) {
  const { title, postComplete, postResume, category, createdAt } = req.body;
  try {
    console.log(req.params.id);
    const mongoPayload = {
      title: title,
      postComplete: postComplete,
      postResume: postResume,
      category: category,
      createdAt: createdAt,
    };
    const postUpdated = await Post.findByIdAndUpdate(
      req.params.id,
      mongoPayload,
      { new: true }
    );
    console.log(postUpdated);
    res.send({ message: "postagem atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "postagem não foi encontrado!" });
  }
}
async function deletePost(req, res) {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).send({ menssage: "postagem deletada com sucesso!" });
  } catch (error) {}
}

module.exports = {
  createPost,
  readAllPost,
  updatePost,
  deletePost,
};
