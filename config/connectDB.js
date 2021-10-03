const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the DB");
  } catch (error) {
    console.log("not connected to the db", error);
  }
};

module.exports = connectDB;
