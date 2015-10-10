// Load required packages
var mongoose = require("mongoose");

// Define our teams schema
var BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: String,
  comments: String
});

// Export the Mongoose model
module.exports = mongoose.model("Blog", BlogSchema);
