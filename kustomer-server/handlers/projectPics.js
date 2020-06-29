const db = require('../models');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const conn = mongoose.createConnection('mongodb://localhost:27017/kustomer');
let gfs;

conn.once('open', () => {
	gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('projectPictures');
});

exports.getPics = async function(req, res, next) {
	try {
		let project = await db.Project.findById(req.params.project_id);
		return res.status(200).json(project.projectPics);
	} catch(err) {
		return next(err);
	}
}

exports.showPic = async function(req, res, next) {
	try {
		let file = await gfs.files.findOne({ filename: req.params.filename });
		const readstream = gfs.createReadStream(file.filename);
		return readstream.pipe(res);
		console.log(gfs);
	} catch(err) {
		return next(err);
	}
}

exports.addPics = async function(req, res, next) {
	try {
		const projectPics = req.files.map(file => file.filename);
		let project = await db.Project.findById(req.params.project_id);
		project.projectPics.push(...projectPics);
		await project.save();
		return res.status(200).json(project);
	} catch(err) {
		return next(err);
	}
}

exports.deletePic = async function(req, res, next) {
	try {
		let project = await db.Project.findById(req.params.project_id);
		let projectPics = project.projectPics.filter(pic => pic !== req.params.filename);
		project.projectPics = projectPics;
		await project.save();
		await gfs.files.findOneAndDelete({ filename: req.params.filename });
		return res.status(200);
	} catch(err) {
		return next(err);
	}
}