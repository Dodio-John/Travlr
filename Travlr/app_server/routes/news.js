var express = require('express');
var router = express.Router();
const ctlNews = require('../controllers/news');

/* GET news page. */
router.get('/', ctlNews.news);
module.exports = router;