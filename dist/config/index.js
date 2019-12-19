"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB_NAME = exports.dbConnection = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["process.env ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MONGODB_URI = process.env.MONGODB_URI;
console.log('MONGODB_URI: ' + process.env.MONGODB_URI);
console.log(_templateObject(), process.env);
var connectedDB;
var mongoClient = _mongodb["default"].MongoClient; // mongoClient.on('connect', console.log);

var dbConnection = {
  connect: function connect(done) {
    mongoClient.connect(MONGODB_URI, function (err, db) {
      // if (err) done(err);
      // connectedDB = db;
      return done(err, db.db(DB_NAME));
    });
  }
}; // export const db = connectedDB;

exports.dbConnection = dbConnection;
var DB_NAME = 'choir-file';
exports.DB_NAME = DB_NAME;