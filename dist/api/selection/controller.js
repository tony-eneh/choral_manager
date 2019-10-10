"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteSelection = exports.updateSelection = exports.createSelection = exports.getSelections = exports.getSelection = void 0;

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

console.log('entered /api/selections/controller.js');

var getSelection = function getSelection(req, res) {
  console.log('SEE THE REQ PARAM HERE', req.params.id);
  res.send('we got it loud and clear!');
};

exports.getSelection = getSelection;

var getSelections = function getSelections(req, res) {
  _model["default"].getSelections(JSON.parse(req.body), function (err, data) {
    if (err) console.log(_templateObject(), err);
    res.send(data);

    _config.db.close();
  });
};

exports.getSelections = getSelections;

var createSelection = function createSelection(req, res) {};

exports.createSelection = createSelection;

var updateSelection = function updateSelection(req, res) {};

exports.updateSelection = updateSelection;

var deleteSelection = function deleteSelection(req, res) {};

exports.deleteSelection = deleteSelection;