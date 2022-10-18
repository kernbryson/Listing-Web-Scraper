const express = require("express")
const app = express()
const cheerio = require("cheerio");
const axios = require("axios");

app.get("/api",(req,res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})
app.listen(5000, ()=>{console.log("server started on 5000")})