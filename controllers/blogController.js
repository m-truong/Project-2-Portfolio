const express = require('express')
const router = express.Router()

// // ============
// // DATABASE
// // ============
const Blog = require('../models/blog.js')

// // ======================
// // RESTful ROUTES "INDUCES"
// // ======================

// Index
router.get('/', (req, res) => {
    Blog.find({}, (err, allBlogs) => {
        if (err) {
            res.send(err)
        } else {
            res.render('BlogPage', {
                blogs: allBlogs
            })
        }
    });
});

// // New
// router.get('/new', (req, res) => {
//     res.render('New');
// });

// // Delete 
// router.delete('/:id', (req, res) => {
//     Blog.findByIdAndRemove(req.params.id, (err, foundBlog) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.redirect('/blogs')
//         }
//     });
// });

// // Update 
// router.put('/:id', (req, res) => {
//     Blog.findByIdAndUpdate(req.params.id, req.body, {
//         new: true
//     }, (err, updatedBlog) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.redirect(`/blogs/${req.params.id}`)
//         }
//     });
// });

// Create 
router.post('/', (req, res) => {
    Blog.create(req.body, (err, createdBlog) => {
        if (err) {
            res.send(err);
        } else {
            res.send('POST request to blogpage successful')
            // res.redirect('/blogs');
        }
    });
});

// // Edit 
// router.get('/:id/edit', (req, res) => {
//     Blog.findById(req.params.id, (err, foundBlog) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.render('Edit', {
//                 blog: foundBlog
//             })
//         }
//     });
// });

// Show 
router.get('/:id', (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Show', {
                item: foundBlog
            })
        }
    });
});

module.exports = router;