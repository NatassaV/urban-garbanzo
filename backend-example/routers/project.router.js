const express = require('express')
const { getProjects, addProject } = require('../controllers/project.controller')

const router = express.Router()
router.get('/', getProjects)
router.post('/', addProject)

module.exports = router
