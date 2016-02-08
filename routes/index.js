var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/collections', function(req, res, next){
//   res.render('collections', {title: 'collections'});
// });

module.exports = router;
