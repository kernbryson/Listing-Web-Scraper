import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import axios from "axios";
const cheerio = require("cheerio");
const { v4: uuidv4 } = require("uuid");
const homes = [];
var infoObject = {};
const Id = uuidv4();

function AldridgeScrape(infoObject) {
  axios
    .get(
      "https://www.brockandscott.com/foreclosure-sales/?_sft_foreclosure_state=ga"
    )
    .then((res) => {
      const htmlData = res.data;
      // console.log(res)
      // console.log(htmlData);
      const $ = cheerio.load(htmlData);
      $("div", htmlData).each((index, element) => {
        const test = $(element).children(".forecol").text();
        const city = $(element).children(".city").text();
        const county = $(element).children(".county").text();
        const bid = $(element).children(".bid").text();
        const date = $(element).children(".date").text();
        console.log(test);
      });
    });

  return (
    <div>
      <h1>TEST</h1>
    </div>
  );
}

export default AldridgeScrape;
