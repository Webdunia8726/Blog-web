// PodcastRoute.js
const express = require("express");
const router = express.Router();
const {
  getAllPodCast,
  updatePodcast,
  newPodcast,
  deletePodcast,
} = require("../Controller/Podcast.controller.js");
const { upload } = require("../Routes/file_route.js");

router.post("/podcasts", upload.single("img"), newPodcast);
router.get("/podcasts", getAllPodCast);
router.put("/podcasts/:id", updatePodcast);
router.delete("/podcasts/:id", deletePodcast);

module.exports = router;
