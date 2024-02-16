const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUsers);
router.get("/", usersController.readAllUsers);
router.put("/:id", usersController.updateUsers);
router.put("/:id", usersController.deleteUsers);

module.exports = router;
