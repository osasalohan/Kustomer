const express = require('express');
const router = express.Router({ mergeParams: true });
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const { getPics, showPic, addPics, deletePic } = require('../handlers/projectPics');

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/kustomer',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = file.originalname + req.params.project_id;
        const fileInfo = {
          filename: filename,
          bucketName: 'projectPictures'
        };
        resolve(fileInfo);
				console.log(fileInfo);
    });
  }
});

const upload = multer({ storage });

router.get('/', getPics);
router.get('/:filename', showPic)
router.post('/', upload.array('files'), addPics);
router.delete('/:filename', deletePic)

module.exports = router;