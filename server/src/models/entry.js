const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');
const tagSchema = require('./tag');

var entrySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  dateCreated: Date,
  dateDeleted: Date,
  dreamDate: Date,
  dreamTime: Date,
  entryTitle: String,
  description: String,
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: tagSchema
  }],
})

module.exports = mongoose.model('Entry', entrySchema);
