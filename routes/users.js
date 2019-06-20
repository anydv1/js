var express = require('express');
var router = express.Router();
var User=require('../model/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/ajax.ejs');
});
router.post('/users', function(req, res) {
      console.log('oooo',req.body)
     User.create({
       name:req.body.name,
       email:req.body.email
     })
     res.send('successfully added')
  });

  router.get('/users', function(req, res) {
    console.log('oooo',req.body)
  User.find({},function(err,users){
    if (err) return err;
    res.send(users)
  })
});
module.exports = router;
