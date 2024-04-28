const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017"); //Enter your mongodb url
    console.log(`Mongo server run on ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
