const express = require("express");
const router = express.Router();
const mongodb = require("../dbUtil/db");
//1.list Product
router.get("/", (req, res, next) => {
  try {
    mongodb.database(err => {
      if (err) {
        mongodb.closeDb();
        next(err);
      } else {
        mongodb
          .getCollection()
          .find()
          .toArray((err, productResults) => {
            if (err) {
              mongodb.closeDb();
              next(err);
            } else {
              console.log("Products list from db", productResults);
              res.json(productResults);
              mongodb.closeDb();
            }
          });
      }
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
