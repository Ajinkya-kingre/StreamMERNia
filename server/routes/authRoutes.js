const express = require("express");
const { register, login } = require("../controller/authController");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(isAuthenticated, (req, res) => {
  res.json({ message: "this is a protected route, User is authenticated" });
});

module.exports = router;
