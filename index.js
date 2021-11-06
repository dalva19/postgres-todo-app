const express = require("express");
require("dotenv").config();
const app = express();
const pool = require("./db");

app.use(express.json()); // => req.body

//routes
//get all todos
//get a todo
//create a todo
//update a todo
//delete a todo

app.listen(3000, () => {
  console.log("server running on port 3000");
});
