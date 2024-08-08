const mongoose = require("mongoose");

const StorySchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  story: { type: String, required: true },
  dob: { type: Date, required: true },
  quote: { type: String, required: false },
  category: { type: String, required: true },
});

const StoryModel = mongoose.model("StoryModel", StorySchema);

module.exports = StoryModel;
