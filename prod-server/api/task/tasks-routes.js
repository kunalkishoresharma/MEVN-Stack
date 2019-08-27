"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/task', function (req, res) {
  res.send("post.task -- creating a task");
});
router.get('/task', function (req, res) {
  res.send('get.task -- get all task');
});
router.get('/task/:id', function (req, res) {
  res.send('get.task -- get task by id');
});
router.put('/task', function (red, res) {
  res.send('put.task -- update all tasks');
});
router.delete('/task', function (req, res) {
  res.send('delete.task -- Delete all task');
});
var _default = router; //module.exports = router

exports.default = _default;