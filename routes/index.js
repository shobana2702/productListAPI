const express = require("express");
const router = express.Router();
const mongodb = require("./db");
//1.list Product
router.get("/", function(req, res, next) {
  mongodb.database(function() {
    mongodb
      .getCollection()
      .find()
      .toArray(function(err, productResults) {
        if (err) {
          console.error(err);
          res.send(err);
        } else {
          console.log("Products list from db", productResults);
          res.json(productResults);
          mongodb.closeDb();
        }
      });
  });
});

module.exports = router;
