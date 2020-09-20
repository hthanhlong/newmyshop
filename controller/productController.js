const data = require("../MOCK_DATA.json");

class ProductController {
  getProduct(req, res) {
    const id = req.params.id;
    const result = data.products.find((x) => x.id === id);
    res.json(result);
  }

  pagination(req, res, next) {
    const page = req.query.page; // so trang hien tai
    const limit = req.query.limit; // limit la so item trong 1 trang

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalProducts = data.products.length;

    const result = data.products.slice(startIndex, endIndex);

    res.send({ result, totalProducts });
  }

  searchField(req, res, next) {
    const q = req.query.q;
    const resultSearch = data.products.filter((x) =>
      x.description.toLowerCase().includes(q.toLowerCase())
    );

    const totalProductsSearch = resultSearch.length;

    res.json({ resultSearch, totalProductsSearch });
  }
}

module.exports = new ProductController();
