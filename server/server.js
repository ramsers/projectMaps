
const express = require('express');
const path = require("path");
const app = express();
const matchedProjectsRoute = require('./routes/matchedProjects');
const ongoingProjectsRoute = require('./routes/ongoingProjects');
const completedProjectsRoute = require('./routes/completedProjects');
// const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT 


// app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/api', (req, res) => {
    res.send("Hello World")
})

app.use('/api/matchedProjects', matchedProjectsRoute);

app.use('/api/ongoingProjects', ongoingProjectsRoute);

app.use('/api/completedProjects', completedProjectsRoute);


app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})