const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = express.Router();

const User = require('../models/user');

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {
  useMongoClient: true
})

router.route('/users')
  .get((req, res) => {
    User.find((err, users) => {
      if (err)
        user.forEach()
        console.log(users)
      res.json(users);
    });
  });

//create user//
router.route('/user/create')
  .post((req, res) => {
    var user = new User();
    user._id = mongoose.Types.ObjectId();
    user.dateCreated = new Date();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.avatar = req.body.avatar;
    user.email = req.body.email;
    user.save((err) => {
      if (err)
        res.send(err);
      res.json({
        message: "User created"
      });
    });
  });

//find user by id//
router.route('/user/find/:userid')
  .get((req, res) => {
    User.findById(req.params.userid, (err, user) => {
      if (err)
        res.send(err);
      res.json(user);
    });
  });

//update user by id//
router.route('/user/update/:userid')
  .post((req, res) => {
    User.findById(req.params.userid, (err, user) => {
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

      user.save((err) => {
        if (err)
          res.send(err);
        res.json({
          message: "User updated"
        });
      });
    });
  });
  
//works to delete user but not journal entries//
router.route('/user/delete/:userid')
  .delete((req, res) => {
    User.remove({
      _id: req.params.userid
    }, (err, user) => {
      if (err)
        res.send(err);

      res.json({
        message: 'User deleted'
      });
    });
  });

module.exports = router;
