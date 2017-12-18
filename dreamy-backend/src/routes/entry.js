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
  .get((req, res) => {
    Entry.find((err, entry) => {
      if (err)
        res.send(err);
      res.json(entry);
    });
  })

//get all journals for a userid
router.route('/journals/:userid')
  .get((req, res) => {
    User.findById(req.params.userid, (err, user) => {
      if (err)
        res.send(err);
      console.log(user.journalEntries);
      res.json(user.journalEntries);
    })
  })
//get journal by journal id//
router.route('/journal/:journalid')
  .get((req, res) => {
    Entry.findById(req.params.journalid, (err, journal) => {
      if (err)
        res.send(err);
        console.log(req.params.journalid);
      res.json(journal)
    });
  })
// seems to work but does not actually delete from mlab//
router.route('/journal/delete/:journalid')
  .delete((req, res) => {
    Entry.remove({
      id: req.params.journalid
    }, (err, journal) => {
      if (err)
        res.send(err);

      res.json({
        message: 'Entry Deleted'
      });
    });
  })
// create new journal entry with user id//
router.route('/createjournal/:userid')
  .post((req, res) => {
    User.findById(req.params.userid, (err, user) => {
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
      entry.save((err, entry) => {
        if (err)
          res.send(err);
      })
      user.save((err, user) => {
        if (err)
          res.send(err);
        res.json(user)
      });
    });
  })
// update a journal entry//
router.route('/journal/update/:journalid')
  .put((req, res) => {
    Entry.findById(req.params.journalid, (err, journal) => {
      if (err)
        res.send(err);
      journal.dreamDate = req.body.dreamDate || journal.dreamDate;
      journal.entryTitle = req.body.entryTitle || journal.entryTitle;
      journal.anonymous = req.body.anonymous || journal.anonymous;
      journal.private = req.body.private || journal.private;
      journal.description = req.body.description || journal.description;
      journal.personalNotes = req.body.personalNotes || journal.personalNotes;
      journal.bedTime = req.body.bedTime || journal.bedTime;
      journal.wakeTime = req.body.wakeTime || journal.wakeTime;
      journal.save((err, journal) => {
        if (err)
          res.send(err);
        res.json(journal);
      });
    });
  })

module.exports = router;
