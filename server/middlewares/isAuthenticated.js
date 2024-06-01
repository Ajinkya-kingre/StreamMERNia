const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    if (!decode) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json("isAuthenticated error ::", error);
  }
};
module.exports = { isAuthenticated };
