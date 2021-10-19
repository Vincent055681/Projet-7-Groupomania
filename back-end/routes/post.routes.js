const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const auth = require("../middlewares/auth.middleware");

// Multer
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../images");
  },
  filename: (req, file, callback) => {
    console.log("multer");
    console.log("file :", file);
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Post CRUD
router.get("/", auth, postCtrl.getAllPosts);
router.post("/", auth, upload.single("image"), postCtrl.createPost);
router.delete("/:id", auth, postCtrl.deletePost);
router.put("/:id", auth, postCtrl.updatePost);

router.patch("/:id/likeunlike", auth, postCtrl.likeUnlikePost);
router.post("/:id/postLikedByUser", auth, postCtrl.postLikedByUser);
router.post("/:id/likeunlike", auth, postCtrl.countLikes);

// Comments CRUD
router.post("/:id/comments", auth, postCtrl.getAllComments);
router.post("/:id/comments/create", auth, postCtrl.createComment);


module.exports = router;
