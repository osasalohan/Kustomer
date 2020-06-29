const mongoose = require('mongoose');
const Professional = require('./professional');

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	professional: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Professional'
	},
	projectPics: [
		{
			type: String
		}
	]
}, {
	timestamps: true
});

projectSchema.pre('remove', async function(next) {
	try {
		let professional = await Professional.findById(this.professional);
		professional.portfolio.remove(this.id);
		await professional.save();
		next();
	} catch(err) {
		return next(err);
	}
})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;