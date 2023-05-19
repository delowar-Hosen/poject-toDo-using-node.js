const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const themeModel = new Schema({
  imageUrl: {
    type: String,
  },
});

const Theme = mongoose.model("Theme", themeModel);
module.exports = Theme;
