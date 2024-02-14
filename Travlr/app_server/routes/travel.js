var express = require('express');
var router = express.Router();
const ctlTravel = require('../controllers/travel');

/* GET travel page. */
router.get('/', ctlTravel.travelList);
module.exports = router;