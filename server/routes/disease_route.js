const express = require("express");

const router = express.Router();

const {
  addDiseasesController,
  getDiseasesController,
  updateDiseaseController,
  deleteDiseaseContoller,
} = require("../controllers/diseases_controller");

router.post("/add_diseases", addDiseasesController);
router.get("/get_diseases", getDiseasesController);
router.put("/update_disease/:id", updateDiseaseController);
router.delete("/delete_disease/:id", deleteDiseaseContoller);

module.exports = router;
