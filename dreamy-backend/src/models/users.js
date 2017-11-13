var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var journalEntriesSchema = require('./journalentries');

var userSchema = new Schema({
  _id: String,
  dateCreated: Date,
  dateDeleted: Date,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: Date,
  age: Number,
  sign: String,
  gender: String,
  Interests: String,
  Bio: String,
  journalEntries: [
    journalEntriesSchema
      ],
      bedTime: Date,
      wakeTime: Date
    },
})

module.exports = mongoose.model('User', userSchema);
