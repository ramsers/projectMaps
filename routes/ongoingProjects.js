const express = require('express');
const router = express.Router();
const ongoingProjectsData = require('../data/ongoingProjects.json');

router.get('/', (req, res) => {
    res.json(ongoingProjectsData);
})

module.exports = router;