const Complete = require("../models/completeModel");
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
      dYear,
      dMonth,
      dDays,
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
      dYear,
      dMonth,
      dDays,
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

exports.deleteData = async (req, res) => {
  try {
    let data = await dataModel.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.completeData = async (req, res) => {
  try {

    let complete = await Complete({
      id: req.body.id,
      title: req.body.title,
      dYear: req.body.dYear,
      dMonth: req.body.dMonth,
      dDays: req.body.dDays,
      data: req.body.data,
      rYear: req.body.rYear,
      rMonth: req.body.rMonth,
      rDay: req.body.rDay,
      rHour: req.body.rHour,
      rMinute: req.body.rMinute,
      rFormat: req.body.rFormat,
      repeat: req.body.repeat,
    }).save();
    res.send(complete);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCompleteData = async (req, res) => {
  try {
    let data = await Complete.find({ title: req.params.title });
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.completeDataDelete = async (req, res) => {
  try {
    let data = await Complete.deleteOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
