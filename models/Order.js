const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  lastName: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  phoneNumber: {
    type: Number,
    required: true,
    max: 255,
    min: 6,
  },
  address: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  cart: [],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
