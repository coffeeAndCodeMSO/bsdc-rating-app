const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const entrySchema = require('./entry');
const User = require('./user');

var tagSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  journalOf: {type: mongoose.Schema.Types.ObjectId, ref: 'Entry'},
  dateCreated: Date,
  tag: String
})

module.exports = mongoose.model('Tag', tagSchema);
