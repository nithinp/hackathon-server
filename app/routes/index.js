const express = require('express');
const router = express.Router();
const categoryCtrl = require('../controllers/categoryController');

router.get('/items', categoryCtrl.getCategoriesList);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
