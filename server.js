
const express = require('express');
const app = express();
const matchedProjectsRoute = require('./routes/matchedProjects');
const ongoingProjectsRoute = require('./routes/ongoingProjects');
const completedProjectsRoute = require('./routes/completedProjects');

const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    res.send("Hello World")
})

app.use('/api/matchedProjects', matchedProjectsRoute);

app.use('/api/ongoingProjects', ongoingProjectsRoute);

app.use('/api/completedProjects', completedProjectsRoute);


app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})