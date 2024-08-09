const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StoryRoute = require("./Routes/StoryRoutes.js");
const PodcastRoute = require("./Routes/PodcastRoute.js");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

global.__basedir = __dirname;

app.use("/files", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://localhost:27017/leadersboli");

mongoose.connection.on("connected", () => {
  console.log("database connected");
});
mongoose.connection.on("error", () => {
  console.log("error connecting to database");
});

require("./Model/Stories.model.js");
require("./Model/Podcast.model.js");

app.use("/api", StoryRoute);
app.use("/api", PodcastRoute);
// app.use("/api", fileRoute);

app.listen(2100, () => {
  console.log("Server started on port 2100");
});
