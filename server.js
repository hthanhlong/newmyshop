const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const configDB = require("./configs/connectDB");
const route = require("./routes/index");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
//  Connect database---------

configDB();
//
// config router ----------
route(app);
// Enviroment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build/"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "build", "index.html"));
  });
}
/// check PORT
app.listen(PORT, () => {
  console.log(`Example app listening at https://localhost:${PORT}`);
});
