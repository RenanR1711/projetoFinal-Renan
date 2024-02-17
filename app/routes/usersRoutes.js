const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, usersController.createUsers);
router.get("/", verifyToken, usersController.readAllUsers);
router.put("/:id", verifyToken, usersController.updateUsers);
router.delete("/:id", verifyToken, usersController.deleteUsers);

module.exports = router;
