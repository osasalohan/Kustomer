const express = require('express');
const router = express.Router({ mergeParams: true });
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const db = require('../models');

const mongoURI = 'mongodb://localhost:27017/kustomer';

const conn = mongoose.createConnection(mongoURI);
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

router.get('/', async function(req, res, next) {
	try {
		let file = await gfs.files.findOne({ filename: 'spaghetti.jpg' });
		const readstream = gfs.createReadStream(file.filename);
		return readstream.pipe(res);
	} catch(err) {
		return next(err);
	}
})

router.post('/', upload.single('file'), async function(req, res, next) {
  try {
		console.log(req.file);
		let image = await db.Image.create({img: req.file});
		return res.status(200).json(image);
	} catch(err) {
		return next(err);
	}
});

module.exports = router;