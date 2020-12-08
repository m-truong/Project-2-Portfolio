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



exports = router;