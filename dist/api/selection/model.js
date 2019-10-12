"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSelection = exports.updateSelection = exports.createSelection = exports.getSelection = exports.getSelections = void 0;

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


var getSelections = function getSelections(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir selection database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    db.collection('selections').find(query).toArray(done);
  });
};

exports.getSelections = getSelections;

var getSelection = function getSelection(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir selection database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('selections').findOne(query, done);
  });
};

exports.getSelection = getSelection;

var createSelection = function createSelection(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir selection database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('selections').insertOne(query, done);
  });
};

exports.createSelection = createSelection;

var updateSelection = function updateSelection(query, object, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir selection database', err);
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
    return db.collection('selections').updateOne(query, object, done);
  });
};

exports.updateSelection = updateSelection;

var deleteSelection = function deleteSelection(query, done) {
  _config.dbConnection.connect(function (err, db) {
    if (err) {
      console.log('error connecting to choir selection database', err);
      return;
    }

    console.log('successfully connected to db'); //normalize ID if present in query

    if (query._id) {
      query._id = normalizeID(query._id);
    }

    return db.collection('selections').deleteOne(query, done);
  });
};

exports.deleteSelection = deleteSelection;