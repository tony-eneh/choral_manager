"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/files/:id', _controller.getFile);
router.get('/files', _controller.getFiles);
router.put('/files/:id', _controller.updateFile);
router.post('/files', _controller.createFile);
router["delete"]('/files/:id', _controller.deleteFile);
console.log('successfully parsed /api/file/route.js');
var _default = router;
exports["default"] = _default;