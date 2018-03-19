const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "OnlineFruitStore";
const prodDocName = "Products";
let collection;
let dbClient;

module.exports = {
  database: function(res, callback) {
    try {
      mongoClient.connect(mongoUrl, function(err, client) {
        if (err) res.json(err);
        else {
          //console.log(" Connection Error");
          db = client.db(dbName);
          dbClient = client;
          collection = db.collection(prodDocName);
          return callback();
        }
      });
    } catch (e) {
      console.log(e);
    }
  },
  getCollection: function() {
    return collection;
  },
  closeDb: function() {
    dbClient.close();
  }
};
