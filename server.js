console.clear();
//import express
const express = require("express");
//import connection to DB
const connectDB = require("./config/connectDB");

//app instance
const app = express();

//import the env
require("dotenv").config();

//connection to the db
connectDB();

//middleware
app.use(express.json());
app.use("/api/user", require("./router/user"));

//Port
PORT = process.env.PORT;

//creating server
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log("server is running", PORT);
});
