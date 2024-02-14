var express = require('express');
var router = express.Router();
const ctlMeals = require('../controllers/meals');

/* GET meals page. */
router.get('/', ctlMeals.meals);
module.exports = router;