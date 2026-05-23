require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected 🤩🔥"))
.catch((err) => console.log(err));

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("ModMate AI Backend Running 🚀");
});


// GET ALL POSTS
app.get("/posts", async (req, res) => {

  const posts = await Post.find();

  res.json(posts);

});


// CREATE POST
app.post("/posts", async (req, res) => {

  const newPost = new Post(req.body);

  await newPost.save();

  res.json({
    message: "Post Saved 😎"
  });

});


// DELETE POST
app.delete("/posts/:id", async (req, res) => {

  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post Deleted 😤"
  });

});


// SEED DATABASE
app.get("/seed", async (req, res) => {

  await Post.deleteMany();

  await Post.insertMany([
    {
      title: "FREE CRYPTO GIVEAWAY!!!",
      content: "Click suspicious link now...",
      status: "spam",
      flair: "Scam Warning",
      toxicity: 92,
      spamScore: 98,
      recommendation: "Remove Immediately"
    },

    {
      title: "Need help learning Python",
      content: "Beginner asking for resources.",
      status: "safe",
      flair: "Help",
      toxicity: 5,
      spamScore: 2,
      recommendation: "Safe Post"
    }
  ]);

  res.send("Database Seeded 😎");

});


// SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});