const Works = require("../models/worksModels");

async function createWorks(req, res) {
  const { title, worksComplete, worksResume, category, createdAt } = req.body;
  try {
    const newworks = new Works({
      title: title,
      worksComplete: worksComplete,
      worksResume: worksResume,
      category: category,
      createdAt: createdAt,
    });
    await newworks.save();
    res.status(201).send({ message: "trabalho criado com susseço" });
  } catch (error) {
    res.send({ message: "deu pau na trabalho" });
  }
}
async function readAllWorks(req, res) {
  try {
    const listWorks = await Works.find();
    res.send({ date: listWorks });
  } catch (error) {
    console.log(error);
    res.send({ menssage: "deu pau na lista de trabalho" });
  }
}

async function updateWorks(req, res) {
  const { title, worksComplete, worksResume, category, createdAt } = req.body;
  try {
    console.log(req.params.id);
    const mongoPayload = {
      title: title,
      worksComplete: worksComplete,
      worksResume: worksResume,
      category: category,
      createdAt: createdAt,
    };
    const worksUpdated = await Works.findByIdAndUpdate(
      req.params.id,
      mongoPayload,
      { new: true }
    );
    console.log(worksUpdated);
    res.send({ message: "trabalho atualizado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "trabalho não foi encontrado!" });
  }
}
async function deleteWorks(req, res) {
  try {
    await Works.findByIdAndDelete(req.params.id);
    res.status(200).send({ menssage: "trabalho deletada com sucesso!" });
  } catch (error) {}
}

module.exports = {
  createWorks,
  readAllWorks,
  updateWorks,
  deleteWorks,
};
