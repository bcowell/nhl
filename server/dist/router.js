"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

require("dotenv/config");

var _lodash = _interopRequireDefault(require("lodash"));

var _yahooFantasy = _interopRequireDefault(require("yahoo-fantasy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import cars from './controllers/cars';

/*
var yf = new YahooFantasy(
    //Y!APPLICATION_KEY,
    //Y!APPLICATION_SECRET
);

// if a user has logged in (not required for all endpoints)
yf.setUserToken(
    //Y!CLIENT_TOKEN,
    //Y!CLIENT_SECRET
);
*/
// Initialize the router
var router = (0, _express.Router)();
router.route('/env').get(function (req, res) {
  res.send('hi'); //res.send(`hi${process.env.TEST}`);
});
/*
router
      .route('/availability')
      .get((req,res) => {
            // let id = req.query.id
            let avail = _.sample(["In Dealership", "Out of Stock", "Unavailable"])
            let availability = `{"available": "${avail}"}`;
            res.send(availability);
      });
*/

var _default = router;
exports.default = _default;