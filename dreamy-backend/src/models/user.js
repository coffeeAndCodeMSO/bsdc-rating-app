const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const entrySchema = require('./entry');
const bcrypt = require('bcryptjs');

var userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dateCreated: Date,
  dateDeleted: Date,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: {unique: true}
  },
  name: String,
  password: String,
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

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
userSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

/**
 * The pre-save hook method.
 */
userSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', userSchema);
