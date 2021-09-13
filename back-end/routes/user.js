const express = require("express");
const router = express.Router()
const userCtrl = require("../controllers/user");


router.post("/signup", userCtrl.signup);

router.get("/login", (req, res, next) => {
    console.log('oki');
    res.status(200).json({
        test: "test"
    })
    next()
})

router.post("/login", userCtrl.login);

  

module.exports = router