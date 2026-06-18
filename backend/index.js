require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(3002, () => {
  console.log("Application Started...!!");
  mongoose.connect(uri);
  console.log("Connected to Database");
});
