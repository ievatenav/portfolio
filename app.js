const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


let data = [
  {
    date: "28.01.2019.",
    project: "A Simple Camp Site.",
    skills: "node.js, express,js, ejs, RESTful Routing, MongoDB, Bootstrap.",
    visit: "https://frozen-shore-43033.herokuapp.com",
    code: "..."
  },
  {
    date: "10.01.2018.",
    project: "A Simple Blog App.",
    skills: "node.js, express,js, ejs, RESTful Routing, MongoDB, SemanticUI.",
    visit: "https://shrouded-harbor-44813.herokuapp.com",
    code: "https://github.com/ievatenav/simple-blog"
  },
  {
    date: "18.12.2018.",
    project: "A Simple To Do App.",
    skills: "DOM manipulation, JQuery, Bootstrap.",
    visit: "https://enigmatic-brushlands-98853.herokuapp.com",
    code: "https://github.com/ievatenav/to-do-app"
  },
  {
    date: "15.12.2018.",
    project: "A Simple Color Guessing Game.",
    skills: "Javascript functions, DOM manipulation.",
    visit: "https://gentle-dawn-50190.herokuapp.com",
    code: "https://github.com/ievatenav/color_game"
  },
  {
    date: "10.12.2018.",
    project: "A Simple Score Keeper.",
    skills: "Basic javascript DOM manipulation.",
    visit: "https://blooming-reaches-62776.herokuapp.com",
    code: "https://github.com/ievatenav/score-keeper"
  }
];


app.get("/", function(req, res){
  res.render("index", {data: data}); 
});


app.listen(process.env.PORT, function(){
    console.log("The portfolio Server is running on PORT " + process.env.PORT + "...");
});