const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("to-do applicatin running.");
});

app.use("/tasks", tasksRouter);

module.exports = app;
