const multer = require('multer');
const path = require('path');


// Set up file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..','filestorage'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
  // Set up file filter
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/plain') {
      cb(null, true);
    } else {
      cb(new Error('Only .txt files are allowed!'), false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });

  module.exports = {
    upload
  }