const router = require("express").Router();
const todoRoutes = require("./todo");

router.use("/api/todos", todoRoutes);

module.exports = router;
