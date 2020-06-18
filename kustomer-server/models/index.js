const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/kustomer', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	keepAlive: true,
	useCreateIndex: true
});

module.exports.Customer = require('./customer');
module.exports.Professional = require('./professional');
module.exports.Category = require('./category');
module.exports.Project = require('./project');
