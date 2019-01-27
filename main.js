// Define portfolio data without DB
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
    visit: "https://ievatenav.github.io/color_game/",
    code: "https://github.com/ievatenav/color_game"
  },
  {
    date: "10.12.2018.",
    project: "A Simple Score Keeper.",
    skills: "Basic javascript DOM manipulation.",
    visit: "https://ievatenav.github.io/score-keeper/",
    code: "https://github.com/ievatenav/score-keeper"
  }
];



// Add data to HTML as a table
data.forEach(function(item){
  let infoContainer = document.querySelector("#infoContainer");
  let div = document.createElement("div");
  div.classList.add("item");
  let hr = document.createElement("hr");
  let table = document.createElement("div");
  table.classList.add("table");
  for(let i=0; i<data.length; i++){
    let key = Object.keys(item)[i];
    let row = document.createElement("div");
    row.classList.add("oneItem");
    let col1 = document.createElement("div");
    col1.classList.add("key");
    let strong = document.createElement("strong");
    let keyText = document.createTextNode(key + ":");
    let col2 = document.createElement("div");
    col2.classList.add("description");
    let infoText = document.createTextNode(item[key]);
    if(item[key].includes("https:")){
      let a = document.createElement("a");
      a.setAttribute("target", "_blank");
      a.setAttribute("href", item[key]);
      let infoText = document.createTextNode(item[key]);
      a.appendChild(infoText);
      col2.appendChild(a);
    } else {
      col2.appendChild(infoText);
    };
    strong.appendChild(keyText);
    col1.appendChild(strong);
    row.appendChild(col1);
    row.appendChild(col2);
    table.appendChild(row);
  };
  div.appendChild(hr);
  div.appendChild(table);
  infoContainer.appendChild(div);
});