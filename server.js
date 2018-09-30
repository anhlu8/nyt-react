require('dotenv').config()
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("./models");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nyt-react");


app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
