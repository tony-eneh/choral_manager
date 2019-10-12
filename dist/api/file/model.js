"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = exports.updateFile = exports.createFile = exports.getFile = exports.getFiles = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _config = require("../../config");

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbo;
var ObjectID = _mongodb["default"].ObjectID;
console.log(ObjectID); //connect to database

var normalizeID = function normalizeID(idString) {
  return ObjectID(idString);
}; //CRUD operations


var getFiles = function getFiles(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    db.collection('files').find(query).toArray(done);
  });
};

exports.getFiles = getFiles;

var getFile = function getFile(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('files').findOne(query, done);
  });
};

exports.getFile = getFile;

var createFile = function createFile(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('files').insertOne(query, done);
  });
};

exports.createFile = createFile;

var updateFile = function updateFile(query, object, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    } //prevent whole document replacing


    object = {
      $set: object
    };
    console.log(object);
    return db.collection('files').updateOne(query, object, done);
  });
};

exports.updateFile = updateFile;

var deleteFile = function deleteFile(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir file database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('files').deleteOne(query, done);
  });
};

exports.deleteFile = deleteFile;