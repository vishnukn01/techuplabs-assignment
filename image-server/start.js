/*eslint-disable*/
var express = require("express");
var multer = require("multer");
var fs = require("fs");
var cors = require("cors");
var app = express();

var DIR = "./uploads";

var upload = multer({
  dest: DIR,
});
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"],
    exposedHeaders: ["authorization"],
    origin: "http://localhost:4200",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    credentials: true,
  })
);

app.use("/images", express.static(__dirname + "/uploads"));

app.post("/api", upload.any(), function (req, res) {
  res.send(req.files.map((x) => x.filename));
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Working on port " + PORT);
});
