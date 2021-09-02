const express = require("express");
const router = express.Router()

// router.get("/", auth, sauceCtrl.getAllSauces);
// router.get('/:id', auth, sauceCtrl.getOneSauce);
// router.post("/", auth, multer, checkSauceInput, sauceCtrl.createSauce);
// router.put("/:id", auth, multer, checkSauceInput, sauceCtrl.updateSauce)
// router.delete("/:id", auth, sauceCtrl.deleteSauce)
// router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)


router.get("/", (req, res, next) => {
    res.json({ publications: "toutes les publis" });
    next();
  });

  router.delete("/", (req, res, next) => {
    res.json({ publications: "supprimée" });
    next();
  });

  router.put("/", (req, res, next) => {
    res.json({ publications: "mise à jour" });
    next();
  });

  router.post("/", (req, res, next) => {
    res.json({ publications: "publier un post" });
    next();
  });

  module.exports = router;
