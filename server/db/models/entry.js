const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var entrySchema = new Schema({
  description: String,
})

module.exports = mongoose.model('Entry', entrySchema);
