const express = require("express");
const app = express();
const mongodb = require("./routes/db");

app.use("/products", require("./routes/index"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error();
  err.message = "Not Found";
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

app.listen(3000, "10.100.110.32", () => {
  console.log("product list api  is up and running");
});

module.exports = app;
