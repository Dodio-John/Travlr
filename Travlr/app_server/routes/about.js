var express = require('express');
var router = express.Router();
const ctlAbout = require('../controllers/about');

/* GET home page. */
router.get('/', ctlAbout.about);

module.exports = router;