const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = express.Router();

const User = require('../models/user');

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {
  useMongoClient: true
})

router.route('/users')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err)
        console.log(users)
      res.json(users);
    });
  })
//create user//
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
    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: "User created"
      });
    });
  })
//find user by id//
router.route('/user/find/:userid')
  .get(function(req, res) {
    console.log(req.params.userid);
    User.findById(req.params.userid, function(err, user) {
      if (err)
        res.send(err);
      console.log(user);
      res.json(user);
    });
  })
//update user by id//
router.route('/user/update/:userid')
  .post(function(req, res) {
    console.log("update user")
    User.findById(req.params.userid, function(err, user) {
      if (err)
        res.send(err);
      user.firstName = req.body.firstName ? req.body.firstName : user.firstName;
      user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
      user.email = req.body.email ? req.body.email : user.email;
      user.birthDate = req.body.birthDate ? req.body.birthDate : user.birthDate;
      user.age = req.body.age ? req.body.age : user.age;
      user.sign = req.body.sign ? req.body.sign : user.sign;
      user.gender = req.body.gender ? req.body.gender : user.gender;
      user.interests = req.body.interests ? req.body.interests : user.interests;
      user.bio = req.body.bio ? req.body.bio : user.bio;

      user.save(function(err) {
        if (err)
          res.send(err);
        res.json({
          message: "User updated"
        });
      });
    });
  })
//works to delete user but not journal entries//
router.route('/user/delete/:userid')
  .delete(function(req, res) {
    User.remove({
      _id: req.params.userid
    }, function(err, user) {
      if (err)
        res.send(err);

      res.json({
        message: 'User deleted'
      });
    });
  });

module.exports = router;
