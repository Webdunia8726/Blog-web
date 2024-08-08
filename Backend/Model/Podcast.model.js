const mongoose = require("mongoose");

const PodCastSchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
});

const PodCastModel = mongoose.model("PodCastModel", PodCastSchema);
module.exports = PodCastModel;
