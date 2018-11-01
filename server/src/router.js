import { Router } from 'express';
import {} from 'dotenv/config';
import _ from 'lodash';
import YahooFantasy from 'yahoo-fantasy';
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
const router = Router();

router
      .route('/env')
      .get((req,res) => {
            //res.send('hi')
            res.send(`hi${process.env.TEST}`);
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

export default router;