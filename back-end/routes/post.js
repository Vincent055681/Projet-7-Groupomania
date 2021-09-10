const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");
const auth = require('../middlewares/auth')

// router.get("/", auth, sauceCtrl.getAllSauces);
// router.get('/:id', auth, sauceCtrl.getOneSauce);
// router.post("/", auth, multer, checkSauceInput, sauceCtrl.createSauce);
// router.put("/:id", auth, multer, checkSauceInput, sauceCtrl.updateSauce)
// router.delete("/:id", auth, sauceCtrl.deleteSauce)
// router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)



router.get("/", postCtrl.getAllPosts);


router.delete("/", (req, res, next) => {
  res.json({ publications: "supprimée" });
  next();
});

router.put("/", (req, res, next) => {
  res.json({ publications: "mise à jour" });
  next();
});

router.post("/", postCtrl.createPost);

module.exports = router;

