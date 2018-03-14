const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const expressValidator = require("express-validator");
const MongoClient = require("mongodb").MongoClient;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(expressValidator());
app.use("/", require("./routes/index"));

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) return console.log(err);
  db = client.db("OnlineFruitStore");
  server = app.listen(3000, "10.100.110.32", () => {
    console.log("product list api  is up and running");
  });
});
