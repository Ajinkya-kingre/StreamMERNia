const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
     process.env.MONGODB_URL
    );
    console.log("mongoDB connected!!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connect;
