const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment.controller");
const auth = require("../middlewares/auth.middleware");

// Comments CRUD
router.get("/:id", auth, commentCtrl.getAllComments);
router.post("/:id", auth, commentCtrl.createComment);

module.exports = router;