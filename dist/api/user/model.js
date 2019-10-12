"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;

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


var getUsers = function getUsers(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir user database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    db.collection('users').find(query).toArray(done);
  });
};

exports.getUsers = getUsers;

var getUser = function getUser(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir user database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('users').findOne(query, done);
  });
};

exports.getUser = getUser;

var createUser = function createUser(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir user database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('users').insertOne(query, done);
  });
};

exports.createUser = createUser;

var updateUser = function updateUser(query, object, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir user database', err);
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
    return db.collection('users').updateOne(query, object, done);
  });
};

exports.updateUser = updateUser;

var deleteUser = function deleteUser(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir user database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('users').deleteOne(query, done);
  });
};

exports.deleteUser = deleteUser;