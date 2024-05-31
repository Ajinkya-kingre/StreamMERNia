const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ajinkyavk143:rudyeris1234@cluster0.eyrnnhv.mongodb.net/"
    );
    console.log("mongoDB connected!!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connect;
