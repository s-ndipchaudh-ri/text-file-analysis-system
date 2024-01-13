const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



var cookieParser = require("cookie-parser");
// declare a new express app
const app = express()
require("./dbConfig").connectDB();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
app.options('/*',cors())
app.use(function (req, res, next) {
	//Enabling CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	next();
});


// import all routes
const Routes = require('./routes');
app.use(Routes)


app.listen(8001, function() {
    console.log("App started")
});