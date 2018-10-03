const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");
const db = require("../models");

module.exports = {
  findArticles: function(req, res) {
    axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      "api_key": process.env.NYT_API,
      "q": req.body.query
    })
    .then(data => {
      res.json(data.data.response)
    })
    .catch(error => {
      console.log(error)
    })
  },
}