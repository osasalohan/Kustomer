const db = require('../models');

async function getPortfolio(req, res, next) {
	try {
		let professional = await db.Professional.findById(req.params.id)
			.populate('portfolio', {
				title: true,
				description: true
			});
		return res.status(200).json(professional.portfolio);
	} catch(err) {
		return next(err);
	}
}

module.exports = getPortfolio;