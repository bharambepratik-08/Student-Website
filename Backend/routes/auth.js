const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "MERNcoding";

// Create a User using POST:'/api/auth/createUser' Don't require login
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 letters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // For errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check weither the user with the same email exist or not
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ error: "User already exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);

      res.json(authToken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  },
);



// Login a User using POST:'/api/auth/login' Don't require login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // For errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({email});
      if (!user) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password)

      if (!passwordCompare) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }

      const data = {
        user: {
            id: user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json(authtoken)

    } catch (error) {
        console.error(error.message);
      res.status(500).send("Some error occured");
    }
  },
);

module.exports = router;
