"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize http server
var app = (0, _express.default)(); // Logger that outputs all requests into the console

app.use((0, _morgan.default)('combined'));
app.use('/api', _router.default);
var server = app.listen(3001, function () {
  var _server$address = server.address(),
      address = _server$address.address,
      port = _server$address.port;

  console.log("Listening at http://".concat(address, ":").concat(port));
});