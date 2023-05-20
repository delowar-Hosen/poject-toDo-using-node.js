const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const completeModel = new Schema(
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

const Complete = mongoose.model("Complete", completeModel);

module.exports = Complete;
