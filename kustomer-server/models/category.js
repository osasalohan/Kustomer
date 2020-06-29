const mongoose = require('mongoose');
const Professional = require('./professional');

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	professionals: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Professional'
		}
	]
});

const Category = mongoose.model('Category', categorySchema);

// Category.create({ name: 'Home Services' })
// 	.then(instance => console.log(instance))
// 	.catch(err => console.log(err));

// Category.create({ name: 'Remote Services' })
// 	.then(instance => console.log(instance))
// 	.catch(err => console.log(err));

module.exports = Category;