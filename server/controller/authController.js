const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookie = require("cookies");

// register
const register = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;
    if (!fullname || !username || !email || !password) {
      return res.status(404).json("fill all the required fileds");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json("User Already exits!!");
    }

    const newUser = await User({
      fullname,
      username,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "User successfully created",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("register error");
  }
};

// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("fill all the required fileds!!");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("email or password is incorrect!!");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json("email or password is incorrect!!");
    }

    const payload = {
      userId: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

    res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite : "strict",
      })
      .json({
        id: user._id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
      });
  } catch (error) {
    console.log("login error", error);
  }
};

module.exports = { register, login };
