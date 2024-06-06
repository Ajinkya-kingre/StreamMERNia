const express = require("express");
const { register, login, logout } = require("../controller/authController");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/isAuthenticated");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(isAuthenticated, logout);
router.route("/profile").get(isAuthenticated, (req, res) => {
  res.json({ message: "this is a protected route, User is authenticated" });
});

module.exports = router;
