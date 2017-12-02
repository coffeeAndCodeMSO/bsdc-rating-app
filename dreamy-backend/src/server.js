const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRouter = require('./routes/user');
const EntryRouter = require('./routes/entry');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://n8:nstn8e81@ds259105.mlab.com:59105/dreamers', {useMongoClient: true})

const router = express.Router();

//middleware
router.use(function(req, res, next){
  console.log("something is happening");
  next();
})

app.use('/api', UserRouter);
app.use('/api', EntryRouter);




app.listen(5000, () => console.log('something is happening'));
