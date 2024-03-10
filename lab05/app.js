import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect(
  "mongodb+srv://hoangducthinh22:<password>@cluster0.v9a6mtf.mongodb.net/?retryWrites=true&w=majority"
);

// Create a new blog post object
const article = new Blog({
  title: "Awesome Post!",
  slug: "awesome-post",
  published: true,
  content: "This is the best post ever",
  tags: ["featured", "announcement"],
});
// Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);

// Insert the article in our MongoDB database
await article.save();

