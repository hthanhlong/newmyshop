const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/", productController.pagination);

router.get("/search", productController.searchField);

router.get("/:id", productController.getProduct);

// router.post() /// check token and check role

// router.put()

// router.delete();

module.exports = router;
