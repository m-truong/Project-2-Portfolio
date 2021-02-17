const express = require('express')
const router = express.Router()

// ============
// DATABASE
// ============
const Project = require('../models/project.js')

// ======================
// RESTful ROUTES "INDUCES"
// ======================

// Index
router.get('/', (req, res) => {
    Project.find({}, (err, allProjects) => {
        if (err) {
            res.send(err)
        } else {
            res.render('ProjectPage', {
                projects: allProjects
            })
        }
    });
});

// New
// router.get('/new', (req, res) => {
//     res.render('New');
// });

// Delete 
// router.delete('/:id', (req, res) => {
//     Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.redirect('/projects')
//         }
//     });
// });

// Update 
// router.put('/:id', (req, res) => {
//     Project.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     }, (err, updatedProject) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.redirect(`/projects/${req.params.id}`)
//         }
//     });
// });

// Create 
// router.post('/', (req, res) => {
//     Project.create(req.body, (err, createdProject) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.redirect('/projects');
//         }
//     });
// });

// Edit 
// router.get('/:id/edit', (req, res) => {
//     Project.findById(req.params.id, (err, foundProject) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.render('Edit', {
//                 project: foundProject
//             })
//         }
//     });
// });

// Show 
router.get('/:id', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', {
                item: foundProject
            })
        }
    });
});

module.exports = router;