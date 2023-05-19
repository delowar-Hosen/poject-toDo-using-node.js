const express = require("express");
const router = express.Router();
const {
  theme,
  myDay,
  getData,
  newList,
  newListData,
  
} = require("../controllers/user");

router.post("/theme", theme);
router.post("/myday", myDay);
router.get("/getdata/:title", getData);
router.post("/newlist", newList);
router.get("/list",newListData );

module.exports = router;
