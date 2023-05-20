const dataModel = require("../models/dataModel");
const newList = require("../models/newListModel");
const themeModel = require("../models/themeModel");

exports.theme = async (req, res) => {
  try {
    const { imgUrl } = req.body;

    const theme = await new themeModel({
      imageUrl: imgUrl,
    }).save();
    const check = await themeModel.findByIdAndUpdate({ id: themes._id });

    res.send({
      id: theme._id,
      url: theme.imageUrl,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.myDay = async (req, res) => {
  try {
    const {
      title,
      data,
      year,
      month,
      date,
      rYear,
      rMonth,
      rDay,
      rHour,
      rMinute,
      rFormat,
      repeat,
    } = req.body;

    const dataStructer = await new dataModel({
      title,
      dYear: year,
      dMonth: month,
      dDays: date,
      data,
      rYear,
      rMonth,
      rDay,
      rHour,
      rMinute,
      rFormat,
      repeat,
    }).save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.getData = async (req, res) => {
  try {
    let data = await dataModel.find({ title: req.params.title });
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.newList = async (req, res) => {
  try {
    const newlist = await new newList({
      name: req.body.name,
    }).save();
  } catch (error) {
    console.log(error.message);
  }
};

exports.newListData = async (req, res) => {
  try {
    let data = await newList.find({});
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.listDelete = async (req, res) => {
  try {
    let data = await newList.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getTheme = async (req, res) => {
  try {
    let data = await themeModel.find({});
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
