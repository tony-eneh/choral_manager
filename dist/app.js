"use strict";

var _api = _interopRequireDefault(require("./api"));

var _config = require("./config");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["server successfully started. Listening on port 3000"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//connect to database
_config.dbConnection.connect(function (err) {
  if (err) {
    console.log('error connecting to choir file database', err);
    return;
  }

  console.log('successfully connected to db');
}); // eslint-disable-next-line no-undef
//.then(port=>console.log`successful connected to database on port ${port}`)
// eslint-disable-next-line no-undef
//.catch(err=>console.log`error: ${err}`);


var app = (0, _express["default"])(); // console.log(apiRouter);

app.use('/api', _api["default"]); // app.use('/', (req, res) => { res.send('yesso! you got our static page') });

app.listen(3000, console.log(_templateObject()));