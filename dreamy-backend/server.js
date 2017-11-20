const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./src/models/user');
const Entry = require('./src/models/entry');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// mongoose.connect('ds259105.mlab.com:59105/dreamers -u n8 -p nstn8e81');
mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {useMongoClient: true})
var port = 5000;

var router = express.Router();

//middleware
router.use(function(req, res, next){
  console.log("something is happening");
  next();
})

app.use('/api', router);

router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users){
      if (err)a
        res.json(users);
    });
  })

router.route('/user/create')
  .post(function(req, res) {
    var user = new User();
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

router.route('/user/find/:userid')
  .get(function(req, res) {
    console.log(req.params.userid);
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        console.log(user);
      res.json(user);
    });
  })

router.route('/user/update/:userid')
  .put(function(req, res) {
    console.log("update user")
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        user.firstName = req.body.firstName ? req.body.firstName:user.firstName;
        user.lastName = req.body.lastName ? req.body.firstName:user.firstName;
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

router.route('/user/delete/:userid')
  .delete(function(req, res) {
    User.remove({
      _id: req.params.userid
    }, function(err, user) {
      if (err)
        res.send(err);
        user.journalEntries.map(function(index, entry){
          Entry.remove({
            _id: entry
          }, function(err, entry) {
            if (err)
              res.send(err);
            console.log("deleted %s", entry);
          });
        });
      res.json({message: 'User ' + user._id + ' Deleted'});
    });
  })

router.route('/journals')
  .get(function(req, res) {
      Entry.find(function(err, entry){
        if (err)
          res.send(err);
        res.json(entry);
      });
  })

router.route('/journal/:journalid')
  .get(function(req, res) {
      Entry.findById(req.params.journalid, function(err, journal){
        if (err)
          res.send(err);
        res.json(journal)
      });
  });

router.route('/journal/delete/:journalid')
  .get(function(req, res) {
      Entry.findById(req.params.journalid, function(err, journal){
        if (err)
          res.send(err);
        res.json(journal)
      });
  });

  // "journalEntries": [
  //         "5a11fa6a316a410d617ccf57",
  //         "5a12063439492f11b3ccb0d6",
  //         "5a12070928478f11d632dab6"
  //     ]

router.route('/user/journals/:userid')
  .get(function(req, res) {
    User.findById(req.params.userid)
        .populate("journalEntries")
        .exec(function (err, entry) {
          if (err)
            res.send(err);
          console.log('The entry id is: %s', entry._id);
        });
  })

router.route('/journals/:userid')
  .post(function(req, res) {
    User.findById(req.params.userid, function(err, user){
      if (err)
        res.send(err);
        var entry = new Entry();
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
        user.journalEntries.push(entry);
        entry.save(function(err, entry){
          if(err)
            res.send(err);
        })
        user.save(function(err, user){
          if(err)
            res.send(err);
          res.json(user)
        });
    });
  })

app.listen(port);
