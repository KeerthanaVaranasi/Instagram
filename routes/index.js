var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sample');
});

router.get('/form',function(req,res,next){
  res.render('form',{title:'Form'})
})

module.exports = router;
