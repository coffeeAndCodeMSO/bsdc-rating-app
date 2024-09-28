if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db')
const passport = require('./passport')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const appSecret = process.env.APP_SECRET || 'this is the default passphrase'
const router = express.Router();

const User = require('./db/models/user');
const Entry = require('./db/models/entry');

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: appSecret,
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

app.use(passport.initialize())
app.use(passport.session())

// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

app.use('/auth', require('./auth'))
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('/api', router);

app.get('/*', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'));
});

// ==== Starting Server =====
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT} 🐱 🎃 `)
})
