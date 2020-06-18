const db = require('../models');

exports.addProject = async function(req, res, next) {
	try {
		let project = await db.Project.create({
			title: req.body.title,
			description: req.body.description,
			professional: req.params.id
		});
		let professional = await db.Professional.findById(req.params.id);
		professional.portfolio.push(project.id);
		await professional.save();
		let foundProject = await db.Project.findById(project.id).populate('professional', {
			firstName: true,
			lastName: true
		});
		return res.status(200).json(foundProject);
	} catch(err) {
		return next(err);
	}
}

exports.getProject = async function(req, res, next) {
	try {
		let project = await db.Project.findById(req.params.project_id);
		return res.status(200).json(project);
	} catch(err) {
		return next(err);
	}
}

exports.deleteProject = async function(req, res, next) {
	try {
		let project = await db.Project.findById(req.params.project_id);
		await project.remove();
		return res.status(200).json(project);
	} catch(err) {
		return next(err);
	}
}