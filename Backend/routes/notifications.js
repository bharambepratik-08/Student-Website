const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUser");
const Notification = require("../models/Notification");
const { body, validationResult } = require("express-validator");

// Get all the Notifications for the user using GET: "/api/notifications/fetchAllGoals"
router.get("/fetchAllNotification", fetchuser, async (req, res) => {
  try {
    const notes = await Notification.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).send("Some error occured");
  }
});

// Add new Notification using: POST ".api/notifications/addNotification". Login Required
router.post(
  "/addNotification",
  fetchuser,
  [
    body("title", "Enter a valid title").exists(),
    body("description", "Enter a valid description").exists(),
  ],
  async (req, res) => {
    try {
      const { title, description, duration, date, time, priority, type } = req.body;

      // For errors return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const notification = new Notification({
        title,
        description,
        duration,
        date,
        time,
        priority,
        type,
        user: req.user.id,
      });

      const saveNotification = await notification.save();

      res.json(saveNotification);
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  },
);

// Delete a existing notification using: DELETE "/api/notifications/deleteNotification". Login Required
router.delete("/deleteNotification/:id", fetchuser, async (req, res) => {
  // Find the Notification to be deleted and delete it
  try {
    let notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).send("Not Found");
    }

    if (notification.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    notification = await Notification.findByIdAndDelete(req.params.id);

    res.json({
      Success: "Notification has been deleted",
      notification: notification,
    });
  } catch (error) {
    return res.status(500).send("Some error occured");
  }
});

module.exports = router;
