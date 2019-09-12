"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnection = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DB_URL_STRING = 'mongodb://localhost:27017/choir-file';
var dbConnection = {
  connect: function connect(done) {
    return _mongodb["default"].MongoClient.connect(DB_URL_STRING, done);
  }
};
exports.dbConnection = dbConnection;