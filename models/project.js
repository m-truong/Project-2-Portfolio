const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
    title:  { type: String, required: true },
    description: String,
    github: String,
    heroku: String,
    image: String,
    icons: String,
    // Add new required document field? for FontAwesome Icons
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;