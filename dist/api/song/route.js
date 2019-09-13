"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/songs/:id', _controller.fetchSong);
router.get('/songs', _controller.fetchAllSongs);
router.put('/songs', _controller.createSong);
router.post('/songs', _controller.updateSong);
router["delete"]('/songs', _controller.deleteSong);
console.log('successfully parsed /api/song/route.js');
var _default = router;
exports["default"] = _default;