const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataModel = new Schema(
  {
    title: {
      type: String,
    },
    data: {
      type: String,
    },

    dYear: {
      type: Number,
    },
    dMonth: {
      type: Number,
    },
    dDays: {
      type: Number,
    },

    rYear: {
      type: Number,
    },
    rMonth: {
      type: Number,
    },
    rDay: {
      type: Number,
    },

    rHour: {
      type: Number,
    },
    rMinute: {
      type: Number,
    },
    rFormat: {
      type: String,
    },
    repeat: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataModel);

module.exports = Data;
