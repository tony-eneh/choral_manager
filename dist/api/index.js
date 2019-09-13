"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _file = _interopRequireDefault(require("./file"));

var _song = _interopRequireDefault(require("./song"));

var _user = _interopRequireDefault(require("./user"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router(); // apiRouter.use(fileRouter);


apiRouter.use(_song["default"]); // apiRouter.use(userRouter);

console.log('successfully parsed /api/index.js');
var _default = apiRouter;
exports["default"] = _default;