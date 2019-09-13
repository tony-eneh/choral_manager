"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.fetchAllSongs = exports.fetchSong = void 0;

var _model = _interopRequireDefault(require("./model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('entered /api/song/controller.js');

var fetchSong = function fetchSong(req, res) {
  console.log('SEE THE REQ PARAM HERE', req.params.id);
  res.send('we got it loud and clear!');
};

exports.fetchSong = fetchSong;

var fetchAllSongs = function fetchAllSongs(req, res) {};

exports.fetchAllSongs = fetchAllSongs;

var createSong = function createSong(req, res) {};

exports.createSong = createSong;

var updateSong = function updateSong(req, res) {};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(req, res) {};

exports.deleteSong = deleteSong;