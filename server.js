console.log("hola");
var express = require("express");
var app = express();
app.get("/", function (req,res) {res.send("hola mundo");});
app.get("/hola", function (req,res) {res.send("holajhgjhg");});
app.listen(3000, function () {console.log("funcione");});



