const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

// Post CRUD
router.get("/:id", auth, userCtrl.getOneUser);
router.put("/:id", auth, userCtrl.updateOneUser);


module.exports = router;