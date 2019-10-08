"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_NAME = exports.db = exports.dbConnection = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DB_URL_STRING = 'mongodb://localhost:27017/choir-file';
var connectedDB;
var mongoClient = _mongodb["default"].MongoClient; // mongoClient.on('connect', console.log);

var dbConnection = {
  connect: function connect(done) {
    mongoClient.connect(DB_URL_STRING, function (err, db) {
      if (err) done(err);
      connectedDB = db;
    });
  }
};
exports.dbConnection = dbConnection;
var db = connectedDB;
exports.db = db;
var DB_NAME = 'choir-file';
exports.DB_NAME = DB_NAME;