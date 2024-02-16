const express = require("express");
const router = express.Router();
const worksController = require("../controllers/worksController");

router.post("/", worksController.createWorks);
router.get("/", worksController.readAllWorks);
router.put("/:id", worksController.updateWorks);
router.delete("/:id", worksController.deleteWorks);

module.exports = router;
