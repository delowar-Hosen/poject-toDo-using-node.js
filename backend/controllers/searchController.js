const dataModel = require("../models/dataModel");

exports.searchController = async (req, res) => {
  try {
    let data = await dataModel.find({});
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};
