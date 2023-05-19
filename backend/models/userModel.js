const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userModel = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  googleId: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userModel);
module.exports = User;
