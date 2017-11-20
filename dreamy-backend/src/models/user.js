const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const entrySchema = require('./entry');

var userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dateCreated: Date,
  dateDeleted: Date,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: Date,
  age: Number,
  sign: String,
  gender: String,
  interests: String,
  bio: String,
  journalEntries: [{
    type: Schema.ObjectId,
    ref: entrySchema
  }],
  bedTime: Date,
  wakeTime: Date
})

module.exports = mongoose.model('User', userSchema);
