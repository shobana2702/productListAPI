const mongoClient = require("mongodb").MongoClient;
const config = require("../config/config.js");
let collection;
let dbClient;

module.exports = {
  database: function(callback) {
    try {
      mongoClient.connect(config.db.mongoUrl, (err, client) => {
        if (err) return callback(err);
        else {
          db = client.db(config.db.dbName);
          dbClient = client;
          collection = db.collection(config.db.prodColName);
          return callback();
        }
      });
    } catch (e) {
      return callback(e);
    }
  },
  getCollection: function() {
    return collection;
  },
  closeDb: function() {
    dbClient.close();
  }
};
