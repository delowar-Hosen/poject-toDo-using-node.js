const express = require("express");
const router = express.Router();
const {
  theme,
  myDay,
  getData,
  newList,
  newListData,
  listDelete,
  getTheme,
} = require("../controllers/user");

router.post("/theme", theme);
router.post("/myday", myDay);
router.get("/getdata/:title", getData);
router.post("/newlist", newList);
router.get("/list", newListData);
router.delete("/list/:id", listDelete);
router.get("/gettheme", getTheme);

module.exports = router;
