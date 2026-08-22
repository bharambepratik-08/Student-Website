const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUser");
const Task = require("../models/Tasks");
const { body, validationResult } = require("express-validator");

// Get all the tasks for the user using GET: "/api/task/fetchAllTask"
router.get("/fetchAllTask", fetchuser, async (req, res) => {
  try {
    const notes = await Task.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send("Some error occured");
  }
});

// Add new task using: POST ".api/task/addTask". Login Required
router.post(
  "/addTask",
  fetchuser,
  [
    body("title", "Enter a valid title").exists(),
    body("description", "Enter a valid description").exists(),
    body("due", "Enter a Due Date").exists(),
    body("time", "Enter a Time").exists(),
    body("catogery", "Please select a Catogery").exists(),
  ],
  async (req, res) => {
    try {
      const {
        title,
        description,
        due,
        time,
        priority,
        catogery,
        tags,
        setReminder,
      } = req.body;

      // For errors return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const task = new Task({
        title,
        description,
        due,
        time,
        priority,
        catogery,
        tags,
        setReminder,
        user: req.user.id,
      });

      const saveTask = await task.save();

      res.json(saveTask);
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  },
);

// Update a existing task using: PUT "/api/task/updateTask". Login Required
router.put("/updateTask/:id", fetchuser, async (req, res) => {
  try {
    const {
      title,
      description,
      due,
      time,
      priority,
      catogery,
      tags,
      setReminder,
    } = req.body;

    // Create a newTask Obj

    const newTask = {};

    if (title) {
      newTask.title = title;
    }
    if (description) {
      newTask.description = description;
    }
    if (due) {
      newTask.due = due;
    }
    if (time) {
      newTask.time = time;
    }
    if (priority) {
      newTask.priority = priority;
    }
    if (catogery) {
      newTask.catogery = catogery;
    }
    if (tags) {
      newTask.tags = tags;
    }
    if (setReminder) {
      newTask.setReminder = setReminder;
    }

    // Find the Task to be updated and update it

    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not Found");
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: newTask },
      { new: true },
    );

    res.json({ task });
  } catch (error) {
    return res.status(500).send("Some error occured");
  }
});

// Delete a existing task using: DELETE "/api/task/deleteTask". Login Required
router.delete("/deleteTask/:id", fetchuser, async (req, res) => {
  // Find the Task to be deleted and delete it
  try {
    let task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Not Found");
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    task = await Task.findByIdAndDelete(req.params.id);

    res.json({ "Success": "Task has been deleted", task: task });
  } catch (error) {
    return res.status(500).send("Some error occured");
  }
});

module.exports = router;
