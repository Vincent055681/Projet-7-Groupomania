const express = require("express");
const router = express.Router()
const userCtrl = require("../controllers/user");
// const checkPassword = require("../middleware/check-password")
// const checkEmail = require("../middleware/check-email")

router.post("/signup", userCtrl.signUp);
// router.post("/login", userCtrl.login);

  router.get("/login", (req, res, next) => {
    res.json({ txt: "connexion" });
    next();
  });
  

module.exports = router