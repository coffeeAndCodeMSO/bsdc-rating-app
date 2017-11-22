const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./src/models/users');
const Entry = require('./src/models/entry');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {useMongoClient: true})
var port = 5000;

var router = express.Router();

//middleware
router.use(function(req, res, next){
  console.log("something is happening");
  next();
})

app.use('/api', router);

  /*******************************************
    GET ALL USERS works
  *******************************************/
router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users){
      if (err)
        res.send(err);

      res.json(users)
    });
  })

  /*******************************************
    CREATE USER  works
  *******************************************/

  .post(function(req, res) {
    var user = new User();
    console.log("new user")
    console.log(req)
    user._id = mongoose.Types.ObjectId();
    user.dateCreated = new Date();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.birthDate = req.body.birthDate;
    user.age = req.body.age;
    user.sign = req.body.sign;
    user.gender = req.body.gender;
    user.interests = req.body.interests;
    user.bio = req.body.bio;


    user.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "User created"});
    });
  })

  /*******************************************
    GET ONE USER BY ID works
  *******************************************/

router.route('/users/:userid')
  .get(function(req, res) {
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
      res.json(user);
    });
  })

  /*******************************************
    UPDATE ONE USER BY ID  works
  *******************************************/

  .post(function(req, res) {
    console.log("update user")
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        user.firstName = req.body.firstName ? req.body.firstName:user.firstName;
        user.lastName = req.body.lastName ? req.body.lastName:user.lastName;
        user.email = req.body.email ? req.body.email:user.email;
        user.birthDate = req.body.birthDate ? req.body.birthDate:user.birthDate;
        user.age = req.body.age ? req.body.age:user.age;
        user.sign = req.body.sign ? req.body.sign:user.sign;
        user.gender = req.body.gender ? req.body.gender:user.gender;
        user.interests = req.body.interests ? req.body.interests:user.interests;
        user.bio = req.body.bio ? req.body.bio:user.bio;
      user.save(function(err){
        if(err)
          res.send(err);

          res.json({message: "User updated"});
      });
    });
  })

  /*******************************************
    DELETE ONE USER BY ID works
  *******************************************/

  .delete(function(req, res) {
    User.remove({
      _id: req.params.userid
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({message: 'Deleted'});
    });
  })

  /*******************************************
    GET ALL ENTRIES
  *******************************************/

router.route('/journals')
  .get(function(req, res) {
      Entry.find(function(err, entry){
        if (err)
          res.send(err);

        res.json(entry)
      });
  })

  /*******************************************
    CREATE NEW ENTRY
  *******************************************/
  .post(function(req, res) {
    var entry = new Entry();
    console.log("new entry")
    entry._id = mongoose.Types.ObjectId();
    entry.dateCreated = new Date();
    entry.dreamDate = req.body.dreamDate;
    entry.entryTitle = req.body.entryTitle;
    entry.anonymous = req.body.anonymous;
    entry.private = req.body.private;
    entry.description = req.body.description;
    entry.personalNotes = req.body.personalNotes;
    entry.bedTime = req.body.bedTime;
    entry.wakeTime = req.body.wakeTime;

    entry.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "Entry created"});
    });
  })

  /*******************************************
    CREATE ONE ENTRY BY USER ID works
  *******************************************/

  router.route('/journals/:userid')
  .post(function(req, res) {
    //console.log(User)
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        var entry = new Entry();
        //console.log("new entry")
        entry._id = mongoose.Types.ObjectId();
        entry.dateCreated = new Date();
        entry.createdBy = user._id;
        entry.dreamDate = req.body.dreamDate;
        entry.entryTitle = req.body.entryTitle;
        entry.anonymous = req.body.anonymous;
        entry.private = req.body.private;
        entry.description = req.body.description;
        entry.personalNotes = req.body.personalNotes;
        entry.bedTime = req.body.bedTime;
        entry.wakeTime = req.body.wakeTime;
        //console.log(user)
        //console.log(req.params.userid)
        user.journalEntries.push(entry);
        entry.save(function(err, entry){
          if(err)
            res.send(err);
          })
          user.save(function (err, user){
            if(err)
              res.send(err);
            res.json(user)
          })

        });
  })

/***************************
GET ONE ENTRY BY ENTRY ID works
***************************/

router.route('/journals/:journalid')
  .get(function(req, res) {
    Entry.findById(req.params.journalid, function(err, entry){
      if (err)
        res.send(err);
      res.json(entry);
    });
  })

  /***************************
  UPDATE ONE ENTRY BY ENTRY ID not working !!!!
  ***************************/

  .post(function(req, res) {
    Entry.findById(req.params.entryid, function(err, entry){
      if (err)
        res.send(err);
        entry.dreamDate = req.body.dreamDate ? req.body.dreamDate:entry.dreamDate;
        entry.entryTitle = req.body.entryTitle ? req.body.entryTitle:entry.entryTitle;
        entry.anonymous = req.body.anonymous ? req.body.anonymous:entry.anonymous;
        entry.private = req.body.private ? req.body.private:entry.private;
        entry.description = req.body.description ? req.body.description:entry.description;
        entry.personalNotes = req.body.personalNotes ? req.body.personalNotes:entry.personalNotes;
        entry.tags = req.body.tags ? req.body.tags:entry.tags;
        entry.bedTime = req.body.bedTime ? req.body.bedTime:entry.bedTime;
        entry.wakeTime = req.body.wakeTime ? req.body.wakeTime:entry.wakeTime;
      entry.save(function(err){
        if(err)
          res.send(err);

          res.json({message: "Entry updated"});
      });
    })
  })

/***************************
DELETE ONE ENTRY BY ENTRY ID
***************************/

  .delete(function(req, res) {
    Entry.remove({
      _id: req.params.entryid
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({message: 'Deleted'});
    });
  })

app.listen(port);
