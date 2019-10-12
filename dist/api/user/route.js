"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/users/:id', _controller.getUser);
router.get('/users', _controller.getUsers);
router.put('/users/:id', _controller.updateUser);
router.post('/users', _controller.createUser);
router["delete"]('/users/:id', _controller.deleteUser);
console.log('successfully parsed /api/user/route.js');
var _default = router;
exports["default"] = _default;