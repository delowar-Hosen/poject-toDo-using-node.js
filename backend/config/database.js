const mongoose = require("mongoose");
require("dotenv").config();

exports.db = () => {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("database is connected");
  });
};
