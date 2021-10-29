const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer-config")

// Post CRUD
router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, upload.single("image"), postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.put("/:id", auth, postCtrl.updatePost);

// Images
router.get("/image/:id", auth, postCtrl.getOneImage);


router.patch("/:id/likeunlike", auth, postCtrl.likeUnlikePost);
router.post("/:id/postLikedByUser", auth, postCtrl.postLikedByUser);
router.post("/:id/likeunlike", auth, postCtrl.countLikes);

// Comments CRUD
router.post("/:id/comments", auth, postCtrl.getAllComments);
router.post("/:id/comments/create", auth, postCtrl.createComment);

module.exports = router;
