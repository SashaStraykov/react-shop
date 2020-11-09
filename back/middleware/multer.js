const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const storage = new GridFsStorage({
    url: process.env.DB_CONNECTION, 
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  },);
  const upload = multer({ storage });

  const checkFiles = upload.fields([{ name: 'imgs', maxCount: 5 }])
  exports.checkFiles = checkFiles