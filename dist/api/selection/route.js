"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/selections/:id', _controller.getSelection);
router.get('/selections', _controller.getSelections);
router.put('/selections/:id', _controller.updateSelection);
router.post('/selections', _controller.createSelection);
router["delete"]('/selections/:id', _controller.deleteSelection);
console.log('successfully parsed /api/selection/route.js');
var _default = router;
exports["default"] = _default;