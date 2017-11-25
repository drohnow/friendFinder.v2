

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.get("/all", function(req, res) {
	res.json(friends);
  
});


var friends = [
  {
  name:"Ahmed",
  photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
      ]
  },
  {
  name:"Alred",
  photo:"https://linkedin.com/3435aa3.jpg",
  scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
      ]
  }
];




app.post("/api/new", function(req, res) {

  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  //res.json(newFriend);
  console.log(newFriend.name)
  console.log(newFriend.photo)
  console.log(newFriend.scores)
  //console.log(newFriend.scores[1])
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});