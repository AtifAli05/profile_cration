const multer = require("multer");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, "./public/images/upload/");
    },
    filename: (req, file, callBack) => {
      const ext = file.mimetype.split("/")[1];
      callBack(null, `${file.originalname}-${Date.now()}.${ext}`);
    },
  }),
});

module.exports = upload;
