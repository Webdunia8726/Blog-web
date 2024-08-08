const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return res
        .status(400)
        .json({ error: "File types allowed are .jpeg, .png, .jpg" });
    }
  },
});

// Route for file upload
router.post("/uploadFile", upload.single("file"), (req, res) => {
  res.json({ fileName: req.file.filename });
});

// Route for file download
const downloadFile = (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", fileName);

  res.download(filePath, (error) => {
    if (error) {
      res.status(500).send({ message: "File cannot be downloaded " + error });
    }
  });
};

router.get("/files/:filename", downloadFile);

module.exports = { upload, router }; // Export both upload and router
