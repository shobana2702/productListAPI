const app = require("express")();

const mongodb = require("./routes/db");
app.use("/", (req, res, next) => {
  mongodb.database(err => {
    next(err);
  });
});
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

let server = app.listen(3000, "10.100.110.32", () => {
  console.log("product list api  is up and running");
});

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);

let connections = [];

function shutDown() {
  console.log("Received kill signal, shutting down gracefully");
  server.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);

  connections.forEach(curr => curr.end());
  setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
}
module.exports = app;
