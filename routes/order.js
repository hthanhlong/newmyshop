const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.get("/", orderController.getProduct);

router.post("/products", orderController.postProduct);

// router.post() /// check token and check role

// router.put()

// router.delete();

module.exports = router;
