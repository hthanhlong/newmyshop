const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(
      token,
      process.env.TOKEN_SECRET || "somethinghere"
    );
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
  next();
};
