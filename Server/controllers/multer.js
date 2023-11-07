const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Define the destination folder for file uploads
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Define the filename
    },
  });
  
  const upload = multer({ storage: storage });
  module.exports=upload