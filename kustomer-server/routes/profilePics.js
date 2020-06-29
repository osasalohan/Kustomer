const express = require('express');
const router = express.Router({ mergeParams: true });
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const { showPic, addPic, deletePic } = require('../handlers/profilePics');

const storage = new GridFsStorage({
  url: 'mongodb://localhost:27017/kustomer',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        const filename = file.originalname + req.params.id;
        const fileInfo = {
          filename: filename,
          bucketName: 'profilePictures'
        };
        resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

router.get('/', showPic);
router.post('/', upload.single('file'), addPic);
router.delete('/', deletePic);

module.exports = router;