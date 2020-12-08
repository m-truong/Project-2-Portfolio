const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
    title:  { type: String, required: true },
    description: String,
    github: String,
    image: String
    // Be careful editing schema! 
});

const Project = mongoose.model('Project', projectSchema);

// shortcut
exports = Project;