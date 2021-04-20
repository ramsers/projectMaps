const express = require('express');
const router = express.Router();
const matchedProjectsData = require('../data/matchedProjects.json');

router.get('/', (req, res) => {
    res.json(matchedProjectsData);
})

module.exports = router;