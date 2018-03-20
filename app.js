const app = require("express")();
const config = require("./config/config.js");

app.use("/products", require("./routes/index"));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error();
  err.message = "Not Found";
  err.status = 404;
  next(err);
});
//to handle errors
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.send(err);
});

app.listen(config.app.port, config.app.host, () => {
  console.log("product list api  is up and running ");
});

module.exports = app;
