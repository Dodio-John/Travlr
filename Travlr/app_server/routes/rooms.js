var express = require('express');
var router = express.Router();
const ctlRooms = require('../controllers/rooms');

/* GET rooms page. */
router.get('/', ctlRooms.rooms);
module.exports = router;