const express = require("express");
const router = express.Router();
const worksController = require("../controllers/worksController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, worksController.createWorks);
router.get("/", verifyToken, worksController.readAllWorks);
router.put("/:id", verifyToken, worksController.updateWorks);
router.delete("/:id", verifyToken, worksController.deleteWorks);

module.exports = router;
