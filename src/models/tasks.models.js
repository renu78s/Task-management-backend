const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const TasksModel = mongoose.model("tasks", tasksSchema);
module.exports = TasksModel;
