var express = require("express");
var faker = require("faker");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.set("view engine", "ejs");


var personsList = [
  {
    name : "Mohammed Ismail",
    avatar : "https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg",
    email : "ismail@gmail.com",
    phoneNumber : "123456789"
  }
] ;

var persons = function(num){
  for (var i = 0; i < num; i++) {
    var person = {
      name : faker.internet.userName(),
      avatar : faker.image.avatar(),
      email : faker.internet.email(),
      phoneNumber : faker.phone.phoneNumber()
    }
    personsList.push(person);
  }
}
  persons(10);

// app.get('/', function (req, res) {
//   res.render("home")
// })

app.get('/', function(req,res){
  res.render("persons", {personsList : personsList});
})

app.post('/addPerson', function(req, res){
  personsList.push(req.body);
  res.send(req.body)
})


app.get('*',function(req, res){
  res.send("Sorry Page not allowed");
})


app.listen(3000,function(){
  console.log("Server started successfully");
});
