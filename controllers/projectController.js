const express = require('express')
const router = express.Router()

// ============
// DATABASE
// ============
const Project = require('../models/project.js')

// ======================
// RESTful ROUTES "INDUCES"
// ======================
/**
 * GET - the user asks for information from a server, 
 * POST - sending data to a server
 * PUT - sending data to a server with the intention of changing something that pre-existed
 * DELETE - request to remove data from a server
 */

// Index'/<nameOfResource>' GET ex. app.get('/projects'...) // Index should have ALL THE BUTTONS
router.get('/projects', (req, res) => {
    Project.find({}, (err, allProjects) => {
        if (err) {
            res.send(err)
        } else {
            console.log("here's the array of document objects!")
            console.log(allProjects) 
            res.render('Index', {
                projects: allProjects
                // can pass as many props AS WANT
            })
        }
    });
});

// New '/<nameOfResorce>/new' GET ex. app.get('/projects/new')
router.get('/projects/new', (req, res) => {
    res.render('New');
});

// Delete '/<nameOfResource/:id' DELETE ex. app.delete('/projects/:id')
router.delete('/projects/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
        if (err) {
            res.send(err)
        } else {
            // redirects to home-route
            res.redirect('/projects')
        }
    });
});

// Update '/<nameOfResource/:id' PUT ex. app.put('/projects/:id')
router.put('/projects/:id', (req, res) => {
    // {new: true}
    Project.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedProject) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect(`/projects/${req.params.id}`)
        }
    });
});

// Create '/<nameOfResource>/' POST ex. app.post('/projects/')
router.post('/projects/', (req, res) => {
    Project.create(req.body, (err, createdProject) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/projects');
        }
    });
});

// Edit '/<nameOfResource>/:id/edit' GET ex. app.get('/projects/:id/edit')
router.get('/projects/:id/edit', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Edit', {
                project: foundProject
            })
        }
    });
});

// Show '/<nameOfResource>/:id' GET ex. app.get('/projects/:id')
router.get('/projects/:id', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', {
                project: foundProject
            })
        }
    });
});

exports = router;