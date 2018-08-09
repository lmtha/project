var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('pages/home/index', { titlePage: 'Home Page' });
  });

  module.exports = router;
