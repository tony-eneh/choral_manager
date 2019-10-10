"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.getSongs = exports.getSong = void 0;

var model = _interopRequireWildcard(require("./model"));

var _config = require("../../config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral([" DATA FETCHED ", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([" ERROR FROM MODEL ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

console.log('entered /api/song/controller.js');

var getSong = function getSong(req, res) {
  console.log('SEE THE REQ PARAM HERE', req.params.id);
  res.send('we got it loud and clear!');
};

exports.getSong = getSong;

var getSongs = function getSongs(req, res) {
  console.log(req.body);
  model.getSongs(req.body ? JSON.parse(req.body) : req.query || {}, function (err, data) {
    if (err) console.log(_templateObject(), err);
    console.log(_templateObject2(), data);
    res.send(data); // db.close();
  });
};

exports.getSongs = getSongs;

var createSong = function createSong(req, res) {};

exports.createSong = createSong;

var updateSong = function updateSong(req, res) {};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(req, res) {};

exports.deleteSong = deleteSong;