const { Schema } = require("mongoose");

const OrdersShema = new Schema({
  name: String,
  pty: Number,
  price: Number,
  model: String,
});

module.exports = { OrdersShema };
