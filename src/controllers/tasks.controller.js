const TasksModel = require("../models/tasks.models");

const createTaskController = async (req, res) => {
  try {
    let { task, status } = req.body;

    let newTask = await TasksModel.create({
      task,
      status,
    });

    return res.status(201).json({
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllTaskController = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};

    if (status === "pending" || status === "done") {
      filter.status = status;
    }

    const tasks = await TasksModel.find(filter);

    // let newTask = await TasksModel.find();

    return res.status(200).json({
      message: "fetched tasks successfully.",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteSingleTaskController = async (req, res) => {
  try {
    let { id } = req.params;
    await TasksModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: "task deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateTaskController = async (req, res) => {
  try {
    let { id } = req.params;
    let task = req.body;
    console.log(req.body);
    let updatedTask = await TasksModel.findByIdAndUpdate(id, task);

    return res.status(200).json({
      message: "task updated successfully.",
      data: updatedTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createTaskController,
  getAllTaskController,
  deleteSingleTaskController,
  updateTaskController,
};
