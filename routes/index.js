const products = require("./products");
const auth = require("./auth");
const order = require("./order");
const protect = require("../middlewares/protect");
const adminChecked = require("../middlewares/checkAdmin");

function route(app) {
  app.use("/api/products", products);
  app.use("/api/auth", auth);
  app.use("/api/order", order);
}

module.exports = route;
