const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next) {
	try {
		let professional = await db.Professional.findOne({
			email: req.body.email
		});
		let { id, firstName, lastName, userType } = professional;
		let isMatch = await professional.comparePassword(req.body.password);
		if(isMatch) {
			let token = jwt.sign({
				id,
				firstName,
				lastName,
				userType
			}, process.env.SECRET_KEY);
			return res.status(200).json({
				id,
				firstName,
				lastName,
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
		let { category, ...body } = req.body;
		let foundCategory = await db.Category.findOne({ name: category });
		let professional = await db.Professional.create({ 
			...body,
			category: foundCategory.id
		});
		foundCategory.professionals.push(professional.id);
		await foundCategory.save();
		let { id, firstName, lastName, userType } = professional;
		let token = jwt.sign({
			id,
			firstName,
			lastName,
			userType
		}, process.env.SECRET_KEY);
		return res.status(200).json({
			id,
			firstName,
			lastName,
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