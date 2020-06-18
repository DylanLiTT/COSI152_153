"use strict";

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/authDemo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!!!")
});

const authRouter = require('./routes/authentication');
const isLoggedIn = authRouter.isLoggedIn
const loggingRouter = require('./routes/logging');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dbRouter = require('./routes/db');
// const toDoRouter = require('./routes/todo');


const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(cors());
app.use(layouts);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authRouter)
app.use(loggingRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.get("/houseForRent", homeController.showHouseForRent);

app.get("/restaurant", homeController.showRestaurantOpenNow);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.get("/covid19",
  async (req,res,next) => {
    try {
      let method = req.params.method
      let result = await axios.get("https://covidtracking.com/api/v1/states/current.json");
      //https://covidtracking.com/api/v1/states/daily.json")
      let data = result['data']
      if (method=="json"){
         res.json(data)
       } else {
         res.render('covid19',{data:data})
       }
    }
    catch(e){
      next(e)
    }
  })


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});




module.exports = app;
