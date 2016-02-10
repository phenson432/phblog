//import express, our route handler
var express = require("express");

//import body-parser - this will be used to create objects from data sent by the client
var bodyParser = require("body-parser");

//create the express app
var app = express();

//import mongoose. This is the driver to communicate between the database and Node.js
var mongoose = require("mongoose");

//set a port - this is necessary to host the app. We could just set it to listen to a static port but we'll put this here in case we host it somewhere
var port = process.env.PORT || 3000;

//setup the bodyparser we imported and the JSON parser it contains (in case we need it later)
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//set the view engine - this is used to process the views (i.e. pages) that the client sees
app.set("view engine", "ejs");

//this will show us in the console which page has been requested by the client server - handy to help explain things
app.use("/", function (req, res, next) {
   console.log("URL Request: " + req.url);
   next(); 
});

//route (just one for now, the root route!)
//this means that any request on http:\\localhost:3000 will render the main.ejs page stored in the views folder
app.get("/", function (req, res) {
   res.render("main"); 
});

//start the server and listen on the port.
app.listen(port);

//once you have Node.js installed, you can run "node app.js" from the directory of this file to start the server.
//then open a web browser and go to "localhost:3000"
//we can setup a database soon to store content