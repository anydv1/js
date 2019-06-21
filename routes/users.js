var express = require('express');
var router = express.Router();
var User=require('../model/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('../views/ajax.ejs');
});
router.post('/users', function(req, res) {
     User.create({
       name:req.body.name,
       email:req.body.email
     },function(err,user){
      console.log(user)
      res.send({message:'successfully added',id:user._id})
     })
 
  });

  router.get('/users/:id', function(req, res) {
  User.find({_id:req.params.id},function(err,users){
    if (err) return err;
    res.render('../views/event.ejs', { result: users});
    // res.render('../views/event.ejs');
    // res.send(users)
  })
});

router.put('/users/:id', function(req, res) {
  var data={
    name:req.body.name,
    email:req.body.email
  }
  User.findByIdAndUpdate(req.params.id,data,function(err,user){
     if(err) res.send(err) 
     res.send({message:'updated',data:user})

  })
  // User.find({_id:req.params.id},function(err,users){
  //   if (err) return err;
  //   console.log('data',users);
  //   console.log('ppp',users._id)
  //   res.render('../views/event.ejs', { result: users});
  //   // res.render('../views/event.ejs');
  //   // res.send(users)
  // })
});

module.exports = router;
