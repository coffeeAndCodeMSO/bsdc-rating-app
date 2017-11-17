const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users');

var entrySchema = new Schema({
  _id: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  dateCreated: Date,
  dateDeleted: Date,
  dreamDate: Date,
  entryTitle: String,
  anonymous: Boolean,
  private: Boolean,
  description: String,
  personalNotes: String,
  // tags: [
  //   String,
  //   String,
  //   String
  // ],
  bedTime: Date,
  wakeTime: Date
})

module.exports = mongoose.model('Entry', entrySchema);
