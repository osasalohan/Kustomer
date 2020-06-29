const db = require('../models');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

const conn = mongoose.createConnection('mongodb://localhost:27017/kustomer');
let gfs;

conn.once('open', () => {
	gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('profilePictures');
});

exports.showPic = async function(req, res, next) {
	try {
		let professional = await db.Professional.findById(req.params.id);
		let file = await gfs.files.findOne({ filename: professional.profilePic });
		console.log(file);
		const readstream = gfs.createReadStream(file.filename);
		return readstream.pipe(res);
	} catch(err) {
		return next(err);
	}
}

exports.addPic = async function(req, res, next) {
	try {
		await db.Professional.findByIdAndUpdate(req.params.id, { profilePic: req.file.filename });
		return res.status(200);
	} catch(err) {
		return next(err);
	}
}

exports.deletePic = async function(req, res, next) {
	try {
		let professional = await db.Professional.findById(req.params.id);
		await gfs.files.findOneAndDelete({ filename: professional.profilePic });
		professional.profilePic = undefined;
		await professional.save();
		return res.status(200);
	} catch(err) {
		return next(err)
	}
}