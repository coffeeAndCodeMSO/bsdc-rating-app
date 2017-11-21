var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var journalEntriesSchema = new Schema({
  _id: String,
  dateCreated: Date,
  dateDeleted: Date,
  dreamDate: Date,
  entryTitle: String,
  anonymous: Boolean,
  private: Boolean,
  description: String,
  personalNotes: String,
  tags: [
    String,
    String,
    String
  ]
  bedTime: Date,
  wakeTime: Date
})

module.exports = mongoose.model('JournalEntries', journalEntriesSchema);
