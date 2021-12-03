const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connect = mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${(await connect).connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
