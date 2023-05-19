const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const { db } = require("./config/database");
require("dotenv").config();
const app = express();

//middilware
app.use(cors());
app.use(express.json());
app.use(express.json({ extended: true }));

//databse
db();

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//port
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Port is running");
});
