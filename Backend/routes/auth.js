import express from "express";
import { User } from "../models/user.js";
import Joi from "joi";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Validate input data
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({
        message: error.details[0].message,
      });
    }

    // Check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({
        message: "Invalid Email or Password",
      });
    }

    // Compare the password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT token
    const token = user.generateAuthToken();
    res.status(200).send({
      data: token,
      message: "Logged In Successfully",
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

// Validation schema
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

export default router;
