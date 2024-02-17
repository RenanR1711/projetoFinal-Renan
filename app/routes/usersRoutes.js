const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", usersController.createUsers);
router.get("/", usersController.readAllUsers);
router.put("/:id", usersController.updateUsers);
router.delete("/:id", usersController.deleteUsers);

module.exports = router;
