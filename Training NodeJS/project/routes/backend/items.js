var express = require('express');
var router = express.Router();
const itemsModel = require('./../../schemas/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  itemsModel.find({}).then((items)=>{
    res.render('pages/items/list',{
      titlePage: 'List items',
      items    : items
    });
  });
  
});
router.get('/add', function(req, res, next) {
  res.render('pages/items/add',{titlePage: 'Add items'});
});
module.exports = router;
