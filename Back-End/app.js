const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const databse = require('./database');
const session = require('express-session');
const mongoose= require('./database');


const signUp = require('./components/Auth/signupRoute');

const port = process.env.PORT || 3000;

app.use('/uploads',express.static('uploads'));


// Users end points
var users = require('./routes/users')
app.use('/users', users)


// const server =app.listen(port,()=>
// console.log(`app is running on port ${port}`));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


const userProfileRoute = require('./components/UserProfile/userProfile')

app.use('/user', userProfileRoute);

const postRoute = require('./components/Tweets/tweets');

app.use("/tweets", postRoute);



// app.use(bodyParser.urlencoded({extended : true})) //for body-parser to return warning
app.use(express.json());
app.use ('/signUp',signUp);


const server =app.listen(port,()=>
console.log(`app is running on port ${port}`));


module.exports = server