const express = require("express");
require("dotenv").config();
const app = express();
const routes = require("./routes/index");

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
