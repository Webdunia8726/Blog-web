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

module.exports = { getAllPodCast, newPodcast };
