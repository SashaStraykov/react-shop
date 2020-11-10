// const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');
// const crypto = require('crypto');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
const upload = multer({
  storage, 
  limits: { fileSize: 1024 * 1024 * 5},
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
  }

})

const checkFileType = (file, cb) => {
const fileTypes = /jpeg|jpg|png|gif/;
const extName = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
const mimeTypes = fileTypes.test(file.mimetype)
if(mimeTypes && extName) {
  return cb(null, true)
} else {
  cb('Error: images only!')
}
}
// const storage = new GridFsStorage({
//     url: process.env.DB_CONNECTION, 
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   },);
//   const upload = multer({ storage });

  const checkFiles = upload.fields([{ name: 'imgs', maxCount: 5 }])
  exports.checkFiles = checkFiles