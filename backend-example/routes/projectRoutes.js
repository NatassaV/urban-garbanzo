const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();
router.get('/', projectController.projectGetAll);

module.exports = router;
