const express = require("express");
const router = express.Router();
const mongodb = require("./db");
//1.list Product
router.get("/", (req, res) => {
  try {
    mongodb.database(err => {
      if (err) {
        res.json(err);
      } else {
        mongodb
          .getCollection()
          .find()
          .toArray((err, productResults) => {
            if (err) {
              console.error(err);
              res.send(err);
            } else {
              console.log("Products list from db", productResults);
              res.json(productResults);
              mongodb.closeDb();
            }
          });
      }
    });
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
