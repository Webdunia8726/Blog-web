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

const mongoURI =
  "mongodb+srv://koliyalritik50:iKMWJ7iV439XltyV@cluster0.wsqflkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

require("./Model/Stories.model.js");
require("./Model/Podcast.model.js");

app.use("/api", StoryRoute);
app.use("/api", PodcastRoute);
// app.use("/api", fileRoute);

app.listen(2100, () => {
  console.log("Server started on port 2100");
});
