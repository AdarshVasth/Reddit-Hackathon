const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  status: String,
  flair: String,
  toxicity: Number,
  spamScore: Number,
  recommendation: String
});

module.exports = mongoose.model("Post", postSchema);