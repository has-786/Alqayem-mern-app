var multer  = require('multer');
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'hashuploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname )
    }
})

module.exports={multer,storage};
