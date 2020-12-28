const mailgun = require("mailgun-js");
const User = require("../model/User");
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mg = mailgun({
  apiKey: process.env.API_MAIL_KEY,
  domain: process.env.DOMAIN,
});

//hashpass
const salt = bcrypt.genSalt(10);
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
  //
  async register(req, res) {
    const { error } = schema.validate({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (error) return res.status(400).send(error.details[0].message);
    // Check User is already in Database
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist) return res.status(400).send("Email already exists");
    //hashedPassword
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    const data = {
      from: "noreply@gmail.com",
      to: req.body.email,
      subject: "noreply@gmail.com",
      html: `<h1>Please click this link to active your account</h1><p>${token}</p>`,
    };

    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

    res.send("Register success!");
  }

  async login(req, res, next) {
    const { error } = schemaLogin.validate({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) return res.status(400).send(error.details[0].message);
    // Check User is already in Database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email was not found");
    // check password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");
    // Create and assign a token

    // const token = jwt.sign(
    //   { _id: user.id },
    //   process.env.TOKEN_SECRET || "somethinghere",
    //   {
    //     expiresIn: "48h",
    //   }
    // );

    const userInfo = {
      name: user.name,
      email: user.email,
      token: token,
    };
    res.header("token", token).send(userInfo);
    next();
  }

  async activeAccount(req, res) {
    const { token } = req.body;

    if (!token) return res.status(401).send("Invalid token");

    const data = jwt.decode(token, process.env.TOKEN_SECRET);

    // Save user
    const user = new User({
      ...data,
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}
module.exports = new authController();
