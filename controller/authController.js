// const mailgun = require("mailgun-js");
const User = require("../models/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const _ = require("lodash");

// const mg = mailgun({
//   apiKey: process.env.API_MAIL_KEY,
//   domain: process.env.DOMAIN,
// });

//hashpass

//VALIDATION

const schemaRegister = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});
const schemaLogin = Joi.object({
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});

class authController {
  // ------------------------------------------------------------------------------//
  // --------------------------------- REGISTER ----------------------------------//
  // -----------------------------------------------------------------------------//
  async register(req, res, next) {
    const { error } = schemaRegister.validate({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (error) return res.status(400).send(error);

    // Check User is already in Database
    const emailExist = await User.findOne({ email: req.body.email });

    if (emailExist)
      return res.status(400).send({ message: "Email already exists" });

    // hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    try {
      await user.save();
      res.status(201).send({ message: "Register success" });
    } catch (error) {
      res.status(400).send(error);
    }

    // const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // const user = new User({
    //   ...data,
    // });

    // const data = {
    //   from: "noreply@gmail.com",
    //   to: req.body.email,
    //   subject: "noreply@gmail.com",
    //   html: `<h1>Please click this link to active your account</h1><p>${token}</p>`,
    // };

    // mg.messages().send(data, function (error, body) {

    // });
  }
  // ------------------------------------------------------------------------------//
  // ------------------------------------- LOGIN ----------------------------------//
  // -----------------------------------------------------------------------------//
  async login(req, res, next) {
    const { error } = schemaLogin.validate({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) return res.status(400).send(error);

    //  if (error) return res.status(400).send(error.details[0].message);

    //  Check User is already in Database
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("Email was not found");
    // check password

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) return res.status(400).send("Incorrect password");

    // // Create and assign a token

    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    const userInfo = {
      name: user.name,
      token: token,
    };

    try {
      res.status(201).send(userInfo);
    } catch (error) {
      res.status(400).send(error);
    }
  }
  // --------------------------------------------------------------------------//
  // ----------------------- Active Account ----------------------------------//
  // ------------------------------------------------------------------------//
  async activeAccount(req, res) {
    //   const { token } = req.body;
    //   if (!token || _.isString(token) === false)
    //     return res.status(401).send("Invalid token");
    //   //
    //   const data = jwt.decode(token, process.env.TOKEN_SECRET);
    //   // Save user
    //   const user = new User({
    //     ...data,
    //   });
    //   try {
    //     const savedUser = await user.save();
    //     res.status(201).send(savedUser);
    //   } catch (error) {
    //     res.status(400).send(error);
    //   }
  }
}
module.exports = new authController();
