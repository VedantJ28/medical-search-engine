const Disease = require("../models/Disease");

const addDiseasesController = async (req, res) => {
  try {
    const disease = new Disease(req.body);
    await disease.save();
    res.status(201).send(disease);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getDiseasesController = async (req, res) => {
  try {
    let query = {};
    if (req.query.batch) {
      query.batch = req.query.batch;
    }
    const diseases = await Disease.find(query).sort({ createdAt: -1 });
    res.send(diseases);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateDiseaseController = async (req, res) => {
  try {
    const { id } = req.params;
    const disease = await Disease.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!disease) {
      return res.status(404).send({ error: "Disease not found" });
    }
    res.send(disease);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteDiseaseContoller = async (req, res) => {
  try {
    const { id } = req.params;
    const disease = await Disease.findByIdAndDelete(id);
    if (!disease) {
      return res.status(404).send({ error: "Disease not found" });
    }
    res.send({ message: "Disease deleted successfully" });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  addDiseasesController,
  getDiseasesController,
  updateDiseaseController,
  deleteDiseaseContoller,
};
