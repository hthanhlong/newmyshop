const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/register", authController.register);

// router.post("/activeAccount", authController.activeAccount);

router.post("/login", authController.login);

// router.post() /// check token and check role

// router.put()

// router.delete();

module.exports = router;
