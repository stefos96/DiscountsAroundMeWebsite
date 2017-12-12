var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/report-bug', function(req, res) {
    res.render('report-bug');
});

module.exports = router;
