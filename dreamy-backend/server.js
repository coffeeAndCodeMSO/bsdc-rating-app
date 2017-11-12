const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');



var port = 5000;

var router = express.Router();

app.use('/api', router);

router.route('/users')
  .get(function(req, res) {
    res.json({message: "got all users"})
  })

  .post(function(req, res) {
    res.json({message: "create new user"})
  });

router.route('/users/:userid')
  .get(function(req, res) {
    res.json({message: "got one user"})
  })

  .post(function(req, res) {
    res.json({message: "updated one user"})
  })

  .delete(function(req, res) {
    res.json({message: "deleted one user"})
  });

router.route('/journals')
  .get(function(req, res) {
    res.json({message: "gets all entries by user id"})
  })

  .post(function(req, res) {
    res.json({message: "creates new journal entry by user id"})
  });

router.route('/journals/:journalid')
  .get(function(req, res) {
    res.json({message: "got one journal entry by id by user id"})
  })

  .post(function(req, res) {
    res.json({message: "update on journal by id by user id"})
  })

  .delete(function(req, res) {
    res.json({message: "deletes one journal entry by id by user id"})
  });

app.listen(port);
