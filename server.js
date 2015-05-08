var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


//conntrollers
var sightingControl = require("./SightingControl")

//Express
var app = express();

// express middleware

app.use(bodyParser.json());
app.use(cors());

//end points

app.get("/sighting", sightingControl.create)
app.post('/sighting', sightingControl.read)
app.put('/sighting/:id', sightingControl.update)
app.delete('/sighting/:id', sightingControl.delete)



// connections
var port = 9000
var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";

mongoose.connect(mongoUri)
mongoose.connection.once('open', function() {
  console.log('connected to mongDB')
})
app.listen(port, function() {
  console.log('listening to port:', port)
});
