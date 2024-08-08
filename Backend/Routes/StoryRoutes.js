const express = require("express");
const router = express.Router();
const {
  newStory,
  getAllStories,
  updateStory,
  deleteStory,
} = require("../Controller/Story.controller.js");
const { upload } = require("../Routes/file_route.js"); // Import upload

router.post("/stories", upload.single("img"), newStory);
router.get("/stories", getAllStories);
router.put("/stories/:id", updateStory);
router.delete("/stories/:id", deleteStory);
module.exports = router;
