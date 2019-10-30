const express = require("express");
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    
    res.render("index.ejs");
});

app.get("/cplusplus", function(req, res){
    
    // res.send("<h1>Mercury!</h1>");
    // console.log("in mercury");
    res.render("cplusplus.ejs");
});

app.get("/java", function(req, res){
    
    // res.send("");
    res.render("java.ejs");
});

app.get("/python", function(req, res){
    
    // res.send("<h1>Mars!</h1>");
    res.render("python.ejs");
});


// function currentPage(){
    
// }


//server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})