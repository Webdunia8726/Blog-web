const StoryModel = require("../Model/Stories.model.js");

// get all stories data ..

const getAllStories = async (req, res) => {
  try {
    const stories = await StoryModel.find(); // Fetch all stories
    res.status(200).json(stories); // Send the data as JSON
  } catch (error) {
    console.error("Failed to fetch stories:", error); // Log error
    res.status(500).json({ message: "Failed to fetch stories", error });
  }
};

// Posting new data of story..

const newStory = async (req, res) => {
  try {
    const { name, title, story, dob, quote, category } = req.body;
    const img = req.file ? req.file.filename : ""; // Handle image upload

    const newStory = new StoryModel({
      name,
      img,
      title,
      story,
      dob,
      quote,
      category,
    });

    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Story
const updateStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const updatedStory = await StoryModel.findByIdAndUpdate(storyId, req.body, {
      new: true,
    });
    if (!updatedStory) return res.status(404).send("Story not found");
    res.json(updatedStory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteStory = async (req, res) => {
  try {
    const storyId = req.params.id;
    const deletedStory = await StoryModel.findByIdAndDelete(storyId);
    if (!deletedStory) {
      return res
        .status(404)
        .json({ success: false, message: "Story not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllStories,
  newStory,
  updateStory,
  deleteStory,
};
