const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newListModel = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const newList = mongoose.model("newList", newListModel);

module.exports = newList;
