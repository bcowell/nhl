"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _lodash = _interopRequireDefault(require("lodash"));

var _cars = _interopRequireDefault(require("./controllers/cars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Initialize the router
var router = (0, _express.Router)();
router.route('/cars').get(function (req, res) {
  res.send(_cars.default);
});
router.route('/availability').get(function (req, res) {
  // let id = req.query.id
  var avail = _lodash.default.sample(["In Dealership", "Out of Stock", "Unavailable"]);

  var availability = "{\"available\": \"".concat(avail, "\"}");
  res.send(availability);
});
var _default = router;
exports.default = _default;