const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const auth = require("../middlewares/auth.middleware");

// Post CRUD
router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.put("/:id", auth, postCtrl.updatePost);

router.patch("/:id/likeunlike", auth, postCtrl.likeUnlikePost);
router.post("/:id/likeunlike", auth, postCtrl.countLikes);

// Comments CRUD
router.post("/:id/comments", auth, postCtrl.getAllComments);
router.post("/:id/comments/create", auth, postCtrl.createComment);


module.exports = router;
