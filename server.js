/** Listen Port */
const port = 8000;
// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
var express = require('express')
// Start up an instance of app
var app = express()
/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server // Setup Server 'node server.js'
const server = app.listen(port, function listening(){
  console.log("server is running");
  console.log(`running on localhost: ${port}`);
});
//GET route that returns the projectData object
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route 
app.post('/addData', (req, res) => {
    console.log(req.body);
    projectData["date"] = req.body.date;
    projectData["temp"] = req.body.temp;
    projectData["content"] = req.body.feelings;
    res.send(projectData);
});

