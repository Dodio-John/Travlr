var express = require('express');
var router = express.Router();
const ctlContact = require('../controllers/contact');

/* GET contact page. */
router.get('/', ctlContact.contact);
module.exports = router;