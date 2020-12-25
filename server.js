const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const https = require("https");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://thanhlong123:thanhlong@cluster0.6vknj.mongodb.net/thanhlong123?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("connected MongoDB")
);

// https.createServer(
//   {
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.cert"),
//   },
//   app
// );

const route = require("./routers/index");

app.use(cors());

route(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build/"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Example app listening at https://localhost:${PORT}`);
});
