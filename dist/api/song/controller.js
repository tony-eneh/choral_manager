"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSong = exports.updateSong = exports.createSong = exports.getSongs = exports.getSong = void 0;

var _model = _interopRequireDefault(require("./model"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

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
  _model["default"].getSongs(JSON.parse(req.body), function (err, data) {
    if (err) console.log(_templateObject(), err);
    res.send(data);

    _config.db.close();
  });
};

exports.getSongs = getSongs;

var createSong = function createSong(req, res) {};

exports.createSong = createSong;

var updateSong = function updateSong(req, res) {};

exports.updateSong = updateSong;

var deleteSong = function deleteSong(req, res) {};

exports.deleteSong = deleteSong;