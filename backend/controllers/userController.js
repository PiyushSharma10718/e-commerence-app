import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user Login
const loginUser = async (req, res) => {
  try {
    const { email, password} = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Does not Exists." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      // res.json({ success: true, token });
      // Testing Putpose
      res.json({ success: true, message: "User Login is Successful.", token });
    } else {
      res.json({ success: false, message: "Invalid Credentials." });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Checking user already exists or not !
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists." });
    }

    // validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a Valid Email.",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a Strong Password.",
      });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    // res.json({ success: true, token });
    // Testing Putpose
    res.json({ success: true, message: "User Registration is Successful." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
  // res.json({ msg: "Register API Working !" }); // For Working Purpose !
};

// Route for Admin Login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      // res.json({ success: true, token });
      // Testing Putpose
      res.json({ success: true, message: "Admin Login is Successful.", token });
    } else {
      res.json({ success: false, message: "Invalid Credentials !" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
