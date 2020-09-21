const User = require("../model/User");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//VALIDATION

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});
const schemaLogin = Joi.object({
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});

class authController {
  async register(req, res) {
    const { error } = await schema.validate({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    if (error) return res.status(400).send(error.details[0].message);
    // Check User is already in Database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists");
    // HashPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    ///
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async login(req, res, next) {
    // const { error } = await schemaLogin.validate({
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    // if (error) return res.status(400).send(error.details[0].message);
    // // Check User is already in Database
    // const user = await User.findOne({ email: req.body.email });
    // if (!user) return res.status(400).send("Email was not found");
    // // check password
    // const validPass = await bcrypt.compare(req.body.password, user.password);
    // if (!validPass) return res.status(400).send("Invalid password");

    const token = jwt.sign({ name: "admin" }, process.env.TOKEN_SECRET, {
      expiresIn: "48h",
    });

    const userInfo = {
      name: "admin",
      email: req.body.email,
      password: req.body.password,
      token: token,
    };

    if (
      userInfo.email === "admin@gmail.com" &&
      userInfo.password === "123456"
    ) {
      res.header("token", token).send(userInfo);
    }
    // // Create and assign a token
    next();
  }
}
module.exports = new authController();
