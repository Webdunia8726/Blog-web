const PodCastModel = require("../Model/Podcast.model");

const getAllPodCast = async (req, res) => {
  try {
    const podcast = await PodCastModel.find();

    res.status(200).json(podcast); // Send the data as JSON
  } catch (error) {
    console.log("error while fetching the data", error);
    res.status(500).json({ message: "failed to fetch podcast", error });
  }
};

const newPodcast = async (req, res) => {
  try {
    const { name, title, dob, quote, category, url } = req.body;
    const img = req.file ? req.file.filename : "";
    // Create a new story instance
    const newPodcast = new PodCastModel({
      name,
      img,
      title,
      quote,
      category,
      dob,
      url,
    });

    // Save the story to the database
    const savedPodcast = await newPodcast.save();
    res.status(201).json(savedPodcast);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePodcast = async (req, res) => {
  try {
    const podcastId = req.params.id;
    const updatedPodcast = await PodCastModel.findByIdAndUpdate(
      podcastId,
      req.body,
      { new: true }
    );
    if (!updatedPodcast) return res.status(404).send("Podcast not found");
    res.json(updatedPodcast);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePodcast = async (req, res) => {
  try {
    const podcastId = req.params.id;
    const deletedPodcast = await PodCastModel.findByIdAndDelete(podcastId);
    if (!deletedPodcast)
      return res
        .status(404)
        .json({ success: false, message: "podcast not found" });

    res
      .status(200)
      .json({ success: true, message: "podcasts deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllPodCast, newPodcast, updatePodcast, deletePodcast };
