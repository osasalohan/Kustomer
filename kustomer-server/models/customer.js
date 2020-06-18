const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String
	},
	password: {
		type: String,
		required: true
	},
	userType: {
		type: String,
		default: 'customer'
	}
});

customerSchema.pre('save', async function(next){
	try {
		if(!this.isModified('password')) {
			return next();
		}
		let hashedPassword = await bcrypt.hash(this.password, 10);
		this.password = hashedPassword;
		return next();
	} catch(err) {
		return next(err);
	}
});

customerSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch
	} catch(err) {
		return next(err);
	}
}

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;