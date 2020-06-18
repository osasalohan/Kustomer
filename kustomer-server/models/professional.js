const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const professionalSchema = new mongoose.Schema({
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
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	occupation: {
		type: String,
		required: true
	},
	portfolio: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project'
		}
	],
	userType: {
		type: String,
		default: 'professional'
	}
});

professionalSchema.pre('save', async function(next){
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

professionalSchema.methods.comparePassword = async function(candidatePassword, next) {
	try {
		let isMatch = await bcrypt.compare(candidatePassword, this.password);
		return isMatch
	} catch(err) {
		return next(err);
	}
}

const Professional = mongoose.model('Professional', professionalSchema);

module.exports = Professional;