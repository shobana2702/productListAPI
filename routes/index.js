const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;

//1.list Product
router.get("/", function(req, res, next) {
  mongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
      console.error(err);
      res.json(err);
    } else {
      db = client.db("OnlineFruitStore");
      console.log("Connected to DB");
      db
        .collection("Products")
        .find()
        .toArray(function(err, productResults) {
          if (err) {
            console.error(err);
            res.json(err);
          } else {
            console.log("Got Products list from db", productResults);
            res.json(productResults);
            client.close();
          }
        });
    }
  });
});

module.exports = router;
