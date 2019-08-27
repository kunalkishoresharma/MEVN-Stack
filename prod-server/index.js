"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const express = require('express')
var app = (0, _express.default)();
(0, _routes.registerRoutes)();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hello world!');
});
app.listen(port, function () {
  return console.log("Example app listening son port ".concat(port, "!"));
});