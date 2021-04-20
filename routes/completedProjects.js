const express = require('express');
const router = express.Router();
const completedProjectsData = require('../data/completedProjects.json');

router.get('/', (req, res) => {
    res.json(completedProjectsData);
})

module.exports = router;