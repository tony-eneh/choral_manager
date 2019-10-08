"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.getSong = exports.getSongs = void 0;

var _mongodb = _interopRequireDefault(require("mongodb"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dbo = _config.db.db(_config.DB_NAME); //CRUD operations


var getSongs = function getSongs(query, done) {
  dbo.getCollection('songs').find(query, done);
};

exports.getSongs = getSongs;

var getSong = function getSong(id, done) {
  if (dbo) {
    return dbo.getCollection('songs').findOne({
      _id: id
    }, done);
  }
};

exports.getSong = getSong;

var createSong = function createSong(query, done) {
  dbo.getCollection('songs').insertOne(query, done);
};

exports.createSong = createSong;

var updateSong = function updateSong(query, object, done) {
  dbo.getCollection('songs').updateOne(query, object, done);
};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(id, done) {
  dbo.getCollection('songs').deleteOne({
    _id: id
  }, done);
};

exports.deleteSong = deleteSong;