const express = require('express');
const router = express.Router();
const {getProjects} = require('../controllers/projectsControl');

router.route('/')
    .get(getProjects);

module.exports = router;