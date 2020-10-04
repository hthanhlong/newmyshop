const products = require("./products");
const auth = require("./auth");
const order = require("./order");
function route(app) {
  app.use("/products", products);
  app.use("/api", auth);
  app.use("/order", order);
}

module.exports = route;
