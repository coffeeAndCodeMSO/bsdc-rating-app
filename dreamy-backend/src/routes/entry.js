const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = express.Router();

const Entry = require('../models/entry');
const User = require('../models/user');

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {
  useMongoClient: true
})

//get all journals//
router.route('/journals')
  .get(function(req, res) {
    Entry.find(function(err, entry) {
      if (err)
        res.send(err);
      res.json(entry);
    });
  })
//get journal by journal id//
router.route('/journal/:journalid')
  .get(function(req, res) {
    Entry.findById(req.params.journalid, function(err, journal) {
      if (err)
        res.send(err);
      res.json(journal)
    });
  });
// seems to work but does not actually delete from mlab//
router.route('/journal/delete/:journalid')
  .delete(function(req, res) {
    Entry.remove({
      id: req.params.journalid
    }, function(err, journal) {
      if (err)
        res.send(err);

      res.json({
        message: 'Entry Deleted'
      });
    });
  });
// create new journal entry with user id//
router.route('/journals/:userid')
  .post(function(req, res) {
    User.findById(req.params.userid, function(err, user) {
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
      entry.save(function(err, entry) {
        if (err)
          res.send(err);
      })
      user.save(function(err, user) {
        if (err)
          res.send(err);
        res.json(user)
      });
    });
  })

module.exports = router;
