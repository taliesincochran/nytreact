const express = require("express");
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose =require('mongoose');
const path = require("path");
const routes = require('./controllers/controller.js');
//setting up express server
const PORT = process.env.PORT || 3001;
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use('/', routes);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
//setting up mongoose
mongoose.Promise = Promise;
const MONGODB_URI =  process.env.MONGODB_URI || "mongodb://localhost/newYorkTimesAPI";
mongoose.connect(MONGODB_URI);
//starting server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
