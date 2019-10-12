"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSelection = exports.updateSelection = exports.createSelection = exports.getSelection = exports.getSelections = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbo = _config.db.db(_config.DB_NAME); //CRUD operations


var getSelections = function getSelections(query, done) {
  dbo.getCollection('selections').find(query, done);
};

exports.getSelections = getSelections;

var getSelection = function getSelection(id, done) {
  if (dbo) {
    return dbo.getCollection('selections').findOne({
      _id: id
    }, done);
  }
};

exports.getSelection = getSelection;

var createSelection = function createSelection(query, done) {
  dbo.getCollection('selections').insertOne(query, done);
};

exports.createSelection = createSelection;

var updateSelection = function updateSelection(query, object, done) {
  dbo.getCollection('selections').updateOne(query, object, done);
};

exports.updateSelection = updateSelection;

var deleteSelection = function deleteSelection(id, done) {
  dbo.getCollection('Selections').deleteOne({
    _id: id
  }, done);
};

exports.deleteSelection = deleteSelection;