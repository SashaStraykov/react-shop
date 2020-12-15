const path = require('path');
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
  limits: { fileSize: 2048 * 2048 * 10},
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb)
    // console.log(checkFileType)
  }

})

const checkFileType = ( file, cb ) => {
const fileTypes = /jpeg|jpg|png|gif/;
const extName = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
const mimeTypes = fileTypes.test(file.mimetype)
if(mimeTypes && extName) {
  return cb(null, true)

} else {
  cb('Error: images only!')
}
}

  const checkFiles = upload.fields([{ name: 'imgs', maxCount: 5 }])
  exports.checkFiles = checkFiles