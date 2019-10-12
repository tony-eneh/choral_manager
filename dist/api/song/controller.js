"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.getSongs = exports.getSong = void 0;

var model = _interopRequireWildcard(require("./model"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral([" ERROR FROM MODEL UPDATING: ", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([" ERROR FROM MODEL CREATING: ", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([" ERROR FROM MODEL ", ""]);

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
  //create query object
  var query = {
    _id: req.params.id
  };
  model.getSong(query, function (err, data) {
    if (err) console.log(_templateObject(), err);
    res.send(data);
  });
};

exports.getSong = getSong;

var getSongs = function getSongs(req, res) {
  //create query object
  var query = req.body ? req.body : req.query || {};
  model.getSongs(query, function (err, data) {
    if (err) console.log(_templateObject2(), err);
    res.send(data);
  });
};

exports.getSongs = getSongs;

var createSong = function createSong(req, res) {
  //create query object
  var query = req.body ? req.body : req.query || {};
  model.createSong(query, function (err, data) {
    if (err) console.log(_templateObject3(), err);
    res.send(data.insertedId);
  });
};

exports.createSong = createSong;

var updateSong = function updateSong(req, res) {
  //create query object
  var object = req.body ? req.body : req.query || {};
  var query = {
    _id: req.params.id
  }; // console.log `object in controller ${object}`;
  // console.log `req.body ${req.body}`;

  delete object._id;
  model.updateSong(query, object, function (err, data) {
    if (err) console.log(_templateObject4(), err);
    res.send(data);
  });
};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(req, res) {};

exports.deleteSong = deleteSong;