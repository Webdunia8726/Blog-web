// PodcastRoute.js
const express = require("express");
const router = express.Router();
const {
  getAllPodCast,
  newPodcast,
} = require("../Controller/Podcast.controller.js");
const { upload } = require("../Routes/file_route.js");

router.post("/podcasts", upload.single("img"), newPodcast);
router.get("/podcasts", getAllPodCast);

module.exports = router;
