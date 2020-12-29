const data = require("../MOCK_DATA.json");
const Order = require("../models/Order");

class OrderController {
  async getProduct(req, res, next) {
    const orderInfo = await Order.find({});

    if (!orderInfo) {
      res.send("No data");
    }

    res.send(orderInfo);
  }

  async postProduct(req, res, next) {
    const order = new Order({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      cart: req.body.cart,
    });

    try {
      await order.save();
      res.status(201).send("Create order success");
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = new OrderController();
