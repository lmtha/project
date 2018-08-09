var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/', require('./home'));
router.use('/items', require('./items'));
router.use('/dashboard', require('./dashboard'));
module.exports = router;
