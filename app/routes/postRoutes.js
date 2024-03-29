const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const verifyToken = require("../middlewares/verifyToken");

router.post("/", verifyToken, postController.createPost);
router.get("/", verifyToken, postController.readAllPost);
router.put("/:id", verifyToken, postController.updatePost);
router.delete("/:id", verifyToken, postController.deletePost);

module.exports = router;
