module.exports = {
  app: {
    port: 3000,
    host: require("ip").address()
  },
  db: {
    mongoUrl: "mongodb://localhost:27017",
    dbName: "OnlineFruitStore",
    prodColName: "Products"
  }
};
