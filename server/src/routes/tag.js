const express = require('express');
const mongoose = require('mongoose');
const app = express();

const router = express.Router();

const Entry = require('../models/entry');
const User = require('../models/user');
const Tag = require('../models/tag');

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {
  useMongoClient: true
})

//create a tag//
router.route('/tag/create/:journalid')
  .post((req, res) => {
    Entry.findById(req.params.journalid, (err, journal) => {
      if (err)
        res.send(err);
      var tag = new Tag();
      tag._id = mongoose.Types.ObjectId();
      tag.createdBy = journal.createdBy;
      tag.journalOf = journal._id;
      tag.dateCreated = new Date();
      tag.description = req.body.description;
      journal.tags.push(tag);
      tag.save((err, tag) => {
        if (err)
          res.send(err);
      })
      journal.save((err, journal) => {
        if (err)
          res.send(err);
        res.json(journal)
      });
    });
  });

//get one tag by tag id//
router.route('/tag/:tagid')
  .get((req, res) => {
    Tag.findById(req.params.tagid, (err, tag) => {
      if (err)
        res.send(err);
      res.json(tag);
    });
  });

//get all tags per journal id//
router.route('/tags/:journalid')
  .get((req, res) => {
    Entry.findById(req.params.journalid, (err, journal) => {
      if (err)
        res.send(err);
      res.json(journal.tags);
    });
  });

//get all tags per userid//
router.route('/tags/:userid')
  .get((req, res) => {
    User.findById(req.params.userid, (err, user) => {
      if (err)
        res.send(err);
      res.json(user.journalEntries.tags);
    });
  });

//update tag//
router.route('/tag/update/:tagid')
  .put((req, res) => {
    Tag.findById(req.params.tagid, (err, tag) => {
      if (err)
        res.send(err);
      tag.description = req.body.description || tag.description;
      tag.save((err, tag) => {
        if (err)
          res.send(err);
        res.json(tag);
      });
    });
  });

//delete tag//
router.route('/tag/delete/:tagid')
  .delete((req, res) => {
    Tag.remove({
      _id: req.params.tagid
    }, (err, tag) => {
      if (err)
        res.send(err);

      res.json({
        message: 'Tag deleted'
      });
    });
  });

module.exports = router;
