const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUser");
const Goal = require("../models/Goals");
const { body, validationResult } = require("express-validator");

// Get all the goals for the user using GET: "/api/goals/fetchAllGoals"
router.get("/fetchAllGoals", fetchuser, async (req, res) => {
  try {
    const notes = await Goal.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send("Some error occured");
  }
});

// Add new Goal using: POST ".api/goals/addGoal". Login Required
router.post(
  "/addGoal",
  fetchuser,
  [
    body("title", "Enter a valid title").exists(),
    body("description", "Enter a valid description").exists(),
  ],
  async (req, res) => {
    try {
      const { title, description, duration, tag, bar, catogery, date } =
        req.body;

      // For errors return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const goal = new Goal({
        title,
        description,
        duration,
        tag,
        bar,
        catogery,
        date,
        user: req.user.id,
      });

      const saveGoal = await goal.save();

      res.json(saveGoal);
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  },
);

// Update a existing goal using: PUT "/api/goals/updateGoal". Login Required
router.put("/updateGoal/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, duration, tag, bar, catogery, date } = req.body;

    // Create a newGoal Obj

    const newGoal = {};

    if (title) {
      newGoal.title = title;
    }
    if (description) {
      newGoal.description = description;
    }
    if (duration) {
      newGoal.duration = duration;
    }
    if (date) {
      newGoal.date = date;
    }
    if (bar) {
      newGoal.bar = bar;
    }
    if (tag) {
      newGoal.tag = tag;
    }
    if (catogery) {
      newGoal.catogery = catogery;
    }

    // Find the Goal to be updated and update it

    let goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).send("Not Found");
    }

    if (goal.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    goal = await Goal.findByIdAndUpdate(
      req.params.id,
      { $set: newGoal },
      { new: true },
    );

    res.json({ goal });
  } catch (error) {
    return res.status(500).send("Some error occured");
  }
});

// Delete a existing goal using: DELETE "/api/goals/deleteGoal". Login Required
router.delete("/deleteGoal/:id", fetchuser, async (req, res) => {
  // Find the Goal to be deleted and delete it
  try {
    let goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).send("Not Found");
    }

    if (goal.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    goal = await Goal.findByIdAndDelete(req.params.id);

    res.json({ Success: "Goal has been deleted", goal: goal });
  } catch (error) {
    return res.status(500).send("Some error occured");
  }
});

// Route: PUT /api/goals/completeGoal/:id. Login required
router.put("/completeGoal/:id", fetchuser, async (req, res) => {
  try {
    // Find the goal to be updated and check if it belongs to the user
    let goal = await Goal.findById(req.params.id);
    if (!goal) {
      return res.status(404).send("Not Found");
    }

    if (goal.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // Update the 'completed' field to true
    goal = await Goal.findByIdAndUpdate(
      req.params.id,
      { $set: { completed: true } },
      { new: true },
    );

    res.json(goal);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
