//Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment');
const expressSession = require('express-session') ({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
require("dotenv").config();

//Import models
const Signup = require('./models/sign')
//Import routes

const signupRoutes = require("./routes/signupRoutes")
const loginRoutes = require("./routes/loginRoutes")
const landingRoute = require("./routes/landingRoute")
const managerRoutes = require("./routes/managerRoutes")
const salesagentRoute = require("./routes/salesagentRoute")
const ownerRoutes = require("./routes/ownerRoutes")
const creditsalesRoute = require("./routes/creditsalesRoute")
const stockRoute = require("./routes/stockRoute")

//Instatiations
const app = express();
const port = 3000;
//Configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });






//set the views path
//set view engine to pug
app.locals.moment = moment
app.set('view engine', 'pug');//specify the view engine
app.set('views', path.join(__dirname, 'views')); //specify the views directory


//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public"))); //specify a folder for static files
app.use(express.urlencoded({ extended: true })); //helps to parse data from forms
app.use(express.json()); //helps to capture data in json format

// // added
// // express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// // passport configs
passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());



//Routes
//use routes/use imported routes
app.use("/", signupRoutes);
app.use("/", loginRoutes);
app.use("/", landingRoute);
app.use("/", managerRoutes);
app.use("/", salesagentRoute);
app.use("/", ownerRoutes);
app.use("/", creditsalesRoute);
app.use("/", stockRoute);


//error message
app.get("*", (req, res) => {
    res.send("error! page does not exist");
  });
  
  
  //Bootstraping a server
  // app.listen(3000, () => console.log('listening on port 3000')); // new
  app.listen(port, () => console.log(`listening on port ${port}`));
