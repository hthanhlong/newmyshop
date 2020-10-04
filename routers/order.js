const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.get("/", orderController.getProduct);

router.post("/products", orderController.postProduct);

module.exports = router;
