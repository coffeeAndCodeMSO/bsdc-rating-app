const mongoose = require('mongoose')
mongoose.Promise = require('bluebird');

const db_url = process.env.MONGODB_URI ||  'mongodb://localhost/bsdc-rating-app'
const db = mongoose.connection.openUri(db_url);

db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${db_url}`
	)
})

module.exports = db
