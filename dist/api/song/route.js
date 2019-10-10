"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/songs/:id', _controller.getSong);
router.get('/songs', _controller.getSongs);
router.put('/songs/:id', _controller.updateSong);
router.post('/songs', _controller.createSong);
router["delete"]('/songs/:id', _controller.deleteSong);
console.log('successfully parsed /api/song/route.js');
var _default = router;
exports["default"] = _default;