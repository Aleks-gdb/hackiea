const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


mongoose.connect('mongodb+srv://admin:code2019@hackiea-vicfh.gcp.mongodb.net/Hackiea', {useNewUrlParser: true}).then(
    () => {console.log('Database is connected') },
    err => {console.log('Can not connect to the database' + err)}
);

const app = express();
const PORT = process.env.PORT || 5000;

// models loaded
const buzz = mongoose.model('Buzzword', new mongoose.Schema({text:String}),'Buzzword');
const apptype = mongoose.model('App Type', new mongoose.Schema({text:String}), 'App Type');
const desc = mongoose.model('Description', new mongoose.Schema({text:String}), 'Description');
const subject = mongoose.model('Subject', new mongoose.Schema({text:String}), 'Subject');

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.get('/',function(req,res){
    res.send({express : "hello"});
});


// Creating a api function to get all the database entries from collections
router.get('/buzzwords', function(req,res){
    // Using find() to retrieve all of the entries from buzz and print to console.
    return buzz.find({},function(err,docs){
        //if there's no error
        if(!err){
            //print
            res.send(docs);
            process.exit();
        } else{ throw err; }
    }
)});

router.get('/apptypes', function(req,res){
    // Using find() to retrieve all of the entries from apptypes and print to console.
    return apptype.find({},function(err,docs){
        //if there's no error
        if(!err){
            //print
            res.send(docs);
            process.exit();
        } else{ throw err; }
    }
)});

router.get('/descriptions', function(req,res){
    // Using find() to retrieve all of the entries from desc and print to console.
    return desc.find({},function(err,docs){
        //if there's no error
        if(!err){
            //print
            res.send(docs);
            process.exit();
        } else{ throw err; }
    }
)});

router.get('/subjects', function(req,res){
    // Using find() to retrieve all of the entries from subjects and print to console.
    return subject.find({},function(err,docs){
        //if there's no error
        if(!err){
            //print
            res.send(docs);
            process.exit();
        } else{ throw err; }
    }
)});

app.use('/api',router);