const express = require("express");
const {
  getAllTaskController,
  createTaskController,
  deleteSingleTaskController,
  updateTaskController,
} = require("../controllers/tasks.controller");

const router = express.Router();

// READ
router.get("/", getAllTaskController);
router.get("/getall", getAllTaskController);
router.post("/create", createTaskController);
router.delete("/:id", deleteSingleTaskController);
router.put("/:id", updateTaskController);

module.exports = router;
