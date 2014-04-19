var mongoose = require('mongoose');

mongoose.connect('mongodb://pedromcunha:admin@ds053808.mongolab.com:53808/students');

module.exports= mongoose.connection;