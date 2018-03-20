const mongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "OnlineFruitStore";
const prodDocName = "Products";
let collection;
let dbClient;

module.exports = {
  database: function(callback) {
    try {
      mongoClient.connect(mongoUrl, (err, client) => {
        if (err) return callback(err);
        else {
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
