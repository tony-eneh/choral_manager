"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFile = exports.updateFile = exports.createFile = exports.getFiles = exports.getFile = void 0;

var model = _interopRequireWildcard(require("./model"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral([" ERROR FROM MODEL DELETING: ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

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

console.log('entered /api/file/controller.js');

var getFile = function getFile(req, res) {
  //create query object
  var query = {
    _id: req.params.id
  };
  model.getFile(query, function (err, data) {
    if (err) console.log(_templateObject(), err);
    res.send(data);
  });
};

exports.getFile = getFile;

var getFiles = function getFiles(req, res) {
  //create query object
  var query = req.body ? req.body : req.query || {};
  model.getFiles(query, function (err, data) {
    if (err) console.log(_templateObject2(), err);
    res.send(data);
  });
};

exports.getFiles = getFiles;

var createFile = function createFile(req, res) {
  //create query object
  var query = req.body ? req.body : req.query || {};
  model.createFile(query, function (err, data) {
    if (err) console.log(_templateObject3(), err);
    res.send(data.insertedId);
  });
};

exports.createFile = createFile;

var updateFile = function updateFile(req, res) {
  //create query object
  var object = req.body ? req.body : req.query || {};
  var query = {
    _id: req.params.id
  }; // console.log `object in controller ${object}`;
  // console.log `req.body ${req.body}`;

  delete object._id;
  model.updateFile(query, object, function (err, data) {
    if (err) console.log(_templateObject4(), err);
    res.send(data);
  });
};

exports.updateFile = updateFile;

var deleteFile = function deleteFile(req, res) {
  //create query object
  var query = {
    _id: req.params.id
  };
  model.deleteFile(query, function (err, data) {
    if (err) console.log(_templateObject5(), err);
    res.send(data);
  });
};

exports.deleteFile = deleteFile;