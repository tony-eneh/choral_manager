"use strict";

var _api = _interopRequireDefault(require("./api"));

var _config = require("./config");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["server successfully started. Listening on port 3000"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["error: ", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["successful connected to database on port ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//connect to database
_config.dbConnection.connect() // eslint-disable-next-line no-undef
.then(function (port) {
  return console.log(_templateObject(), port);
}) // eslint-disable-next-line no-undef
["catch"](function (err) {
  return console.log(_templateObject2(), err);
});

var app = (0, _express["default"])();
app.use('/', _api["default"]);
app.listen(3000, console.log(_templateObject3()));