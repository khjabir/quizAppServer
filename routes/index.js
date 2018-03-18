var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Experion SEPG Quiz' });
});

router.get('/admin', function(req, res, next) {
  res.send('Welcome Admin');
});

module.exports = router;
