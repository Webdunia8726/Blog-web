const express = require("express");
const router = express.Router();
const {
  newStory,
  getAllStories,
} = require("../Controller/Story.controller.js");
const { upload } = require("../Routes/file_route.js"); // Import upload

router.post("/stories", upload.single("img"), newStory);
router.get("/stories", getAllStories);

module.exports = router;
