const products = require("./products");
const auth = require("./auth");
function route(app) {
  app.use("/products", products);
  app.use("/api", auth);
}

module.exports = route;
