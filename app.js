const flash = require('connect-flash');

const path = require('path');

const express = require('express');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');

// const csrf = require('csurf');



// const MongoDBStore = require('connect-mongodb-session')(session);

const MONGO_URL = 'mongodb://localhost:27017/contacts';

const app = express();
// app.use(function(req, res, next) {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});



// app.set('view engine', 'ejs');
// app.set('views', 'views');


const signRoutes = require('./routes/users');
app.use(flash());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));


app.use(signRoutes);

app.use((req,res,next)=>{
 // console.log('fdfdfgghj');
     res.send('<h1> Page not found </h1>');
});


mongoose
  .connect(MONGO_URL,{useNewUrlParser:true})
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
