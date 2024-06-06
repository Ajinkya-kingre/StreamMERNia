const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 20000000 }, // 20 MB
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single("song"); // Assuming the file input field in your form is named "song"

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /mp3|wav|flac/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Allowed mimetypes
    const mimetypes = /image\/jpeg|image\/jpg|audio\/x-m4a|image\/png|audio\/mpeg|audio\/wav/;
  // Check mime
  const mimetype = mimetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Audio Files Only!");
  }
}

module.exports = upload;
