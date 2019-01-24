const express = require('express');
const mongoose = require('mongoose');

/**
 * Backend Server
 * 
 * Uses express for the backend server and 
 * mongoose to connect to our mongoDB Atlas server 
 * 
 * Dependencies: express, mongoose
 */

/**
 * Create a router for the express server. The router will hold routes that we can call
 * on our server to return responses (res)
 */
const router = express.Router();

/**
 * Connect to our mongoDB server given the connection string through the website.
 * Only whitelisted users can access the database
 * Display a message on success/failure in console
 */
mongoose.connect('mongodb+srv://admin:code2019@hackiea-vicfh.gcp.mongodb.net/Hackiea', { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

let buzzwords, apptypes, descriptions, subjects;
//Create an express application 
const app = express();

//Create a local host port string (would be different on a hosted server)
const PORT = process.env.PORT || 5000;

// Use mongoose to load all of the models from mongoDB server
const buzz = mongoose.model('Buzzword', new mongoose.Schema({ text: String }), 'Buzzword').find({}, function (err, docs) {
  buzzwords = docs;
});
const apptype = mongoose.model('App Type', new mongoose.Schema({ text: String }), 'App Type').find({}, function (err, docs) {
  apptypes = docs;
  console.log(apptypes);
})
const desc = mongoose.model('Description', new mongoose.Schema({ text: String }), 'Description').find({}, function (err, docs) { 
  descriptions = docs;
});
const subject = mongoose.model('Subject', new mongoose.Schema({ text: String }), 'Subject').find({}, function (err, docs) {
  subjects = docs;
});

// Listen in on the PORT object, api calls can now be called
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

/**
 * localhost:5000/api/
 * 
 * Test function to say hello
 */
router.get('/', function (req, res) {
  res.send({ express: "hello" });
});

router.get('/hello', function (req,res){
  res.send({express: "hello again!"});
});

/** 
 * localhost:5000/api/buzzwords
 * 
 * Creating an api function to get all the database entries from collections
 */
router.get('/buzzwords', function (req, res) {
  /**
   * Buzz is our buzzwords model from the database.
   * res.json sends a json object which contains an array named 'express'
   * 
   * 'express' is the name of our entire buzzword array
   */
  res.json({ buzzArray: buzzwords });
}
);

/**
 * localhost:5000/api/apptypes
 * 
 * Creating an api function to get all the database entries from collections
 */
router.get('/apptypes', function (req, res) {
  /**
   * apptype is our apptypes model from the database.
   * res.json sends a json object which contains an array named 'express'
   * 
   * 'express' is the name of our entire buzzword array
   */
  //console.log(apptypes);
  res.json({ appArray: apptypes });
});

/**
 * localhost:5000/api/descriptions
 * 
 * Creating an api function to get all the database entries from collections
 */
router.get('/descriptions', function (req, res) {
  /**
   * desc is our descriptions model from the database.
   * res.json sends a json object which contains an array named 'express'
   * 
   * 'express' is the name of our entire buzzword array
   */
  //console.log(descriptions);
  res.json({ descArray: descriptions });
});

/**
 * localhost:5000/api/subjects
 * 
 * Creating an api function to get all the database entries from collections
 */
router.get('/subjects', function (req, res) {
  /**
   * subject is our subjects model from the database.
   * res.json sends a json object which contains an array named 'express'
   * 
   * 'express' is the name of our entire buzzword array
   */
  //console.log(subjects);
  res.json({ subjArray: subjects });
});

/**
 * Add the router routes to the express server
 * 
 * The 'api' tag will make sure these routes will be called using '/api/...'
 * We can add a different router later if other backend functions are needed
 */
app.use('/api', router)
