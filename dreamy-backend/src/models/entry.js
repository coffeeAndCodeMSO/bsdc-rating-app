const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

var entrySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
