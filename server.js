
var express = require("express");
var app = express();
var path = require("path");


app.get("/", function (req,res){
    res.sendfile(
        path.join(
            __dirname + '/src/views/index.html'
        )
    );
});
app.get("/preguntas", function (req,res){
    res.sendfile(
        path.join(
            __dirname + '/src/views/preguntas.html'
        )
    );
});


app.listen(3000);
