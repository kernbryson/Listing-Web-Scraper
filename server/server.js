const express = require("express");
const app = express();
const cheerio = require("cheerio");
const axios = require("axios");
const cors = require("cors");

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors({ origin: "http://localhost3000" }));

app.get("/", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
  res.setHeaders("Access-Control-Allow-Origin: *");
});
app.listen(5000, () => {
  console.log("server started on 5000");
});
