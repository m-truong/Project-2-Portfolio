const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({ 
    title:  { type: String, required: true },
    date: String,
    paragraph: String,
    image: String
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;