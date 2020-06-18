const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
	try {
		let customer = await db.Customer.findOne({
			email: req.body.email
		});
		let { id, firstName, userType } = customer;
		let isMatch = await customer.comparePassword(req.body.password);
		if(isMatch) {
			let token = jwt.sign({
				id,
				firstName,
				userType
			}, process.env.SECRET_KEY);
			return res.status(200).json({
				id,
				firstName,
				userType,
				token
			});
		} else {
			return next({
				status: 400,
				message: 'Invalid email/password'
			});
		}
	} catch(err) {
		return next({
			status: 400,
			message: 'Invalid email/password'
		});
	}
}

exports.signup = async function(req, res, next) {
	try {
		let customer = await db.Customer.create(req.body);
		let { id, firstName, userType } = customer;
		let token = jwt.sign({
			id,
			firstName,
			userType
		}, process.env.SECRET_KEY);
		return res.status(200).json({
			id,
			firstName,
			userType,
			token
		});
	} catch(err) {
		if(err.code === 11000){
			err.message = 'Sorry, email is taken';
		}
		return next({
			status: 400,
			message: err.message
		});
	}
}