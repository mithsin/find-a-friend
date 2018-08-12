// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var friends = [
  {
    friendName: "yoda",
    name: "Yoda",
    gender: "Jedi Master",
    age: 900,
    professional: 2000
  },
  {
    friendName: "yoda",
    name: "Yoda",
    gender: "Jedi Master",
    age: 900,
    professional: 2000
  },
  {
    friendName: "yoda",
    name: "Yoda",
    gender: "Jedi Master",
    age: 900,
    professional: 2000
  }
];

// Routes
// =============================================================

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
    });
app.get('/survey', function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
    });
//get all info
app.get('/api/friends', function(req, res){
    res.json(friends);
    });
//search specific friend
app.get('/api/:friends?', function(req, res){
    var chosen = req.params.friends;
    
    if(chosen){
        console.log(chosen);
    
        for(var i = 0 ; i < friends.length; i++){
            if(chosen === friends[i].friendName){
                return res.json(friends[i]);
            }                                   
        }
        return res.json(false);
     }
    return res.json(friends);
   });

// Create New friend - takes in JSON input
  app.post("/api/friends", function(req, res) {

  var newfriend = req.body;
  newfriend.friendName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  characters.push(newfriend);

  res.json(newfriend);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});