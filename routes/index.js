const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "OnlineFruitStore";
const prodDocName = "Products";
//1.list Product
router.get("/", function(req, res, next) {
  mongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      db = client.db(dbName);
      console.log("Connected to DB");
      db
        .collection(prodDocName)
        .find()
        .toArray(function(err, productResults) {
          if (err) {
            console.error(err);
            res.send(err);
          } else {
            console.log("Products list from db", productResults);
            res.json(productResults);
            client.close();
          }
        });
    }
  });
});

module.exports = router;
