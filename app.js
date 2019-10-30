const express = require("express");
const app = express();
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    
    res.render("index.ejs");
});

app.get("/cplusplus", function(req, res){
    
    // res.send("<h1>Mercury!</h1>");
    // console.log("in mercury");
    var founder = faker.name.findName() + "";
    res.render("cplusplus.ejs", {"founder":founder});
});

app.get("/java", function(req, res){
    
    // res.send("");
    res.render("java.ejs");
});

app.get("/python", function(req, res){
    
    // res.send("<h1>Mars!</h1>");
    res.render("python.ejs");
});


//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})