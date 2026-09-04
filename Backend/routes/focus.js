const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchUser");
const Focus = require("../models/Focus");
const { body, validationResult } = require("express-validator");

// Add a new focus session using POST: "/api/focus/addFocusSession"
router.post(
  "/addFocusSession",
  fetchuser,
  [
    body("title", "Enter a valid title").exists(),
    body("description", "Enter a valid description").exists(),
    body("duration", "Enter a Due Date").exists()
  ],
  async (req, res) => {
    try {
      const {
        title,
        description,
        duration,
        breakDuration
      } = req.body;

      // For errors return bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const focus = new Focus({
        title,
        description,
        duration,
        breakDuration,
        user: req.user.id,
      });

      const saveFocus = await focus.save();

      res.json(saveFocus);
    } catch (error) {
      res.status(500).send("Some error occured");
    }
  },
);

module.exports = router;