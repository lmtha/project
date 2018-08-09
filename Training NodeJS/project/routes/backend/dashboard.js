var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('pages/dashboard/index', { titlePage: 'Dashboard Page' });
  });
module.exports = router