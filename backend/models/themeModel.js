const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const themeModel = new Schema(
  {
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Theme = mongoose.model("Theme", themeModel);
module.exports = Theme;
