var express = require('express');
var app = express();
var path=require('path');
app.use('/',express.static(path.join(__dirname,'./webapp')));

app.get("/data", function(req, res){
    res.sendFile(path.join(__dirname,'tree.json'));
});

app.get("/dis", function(req, res){
    res.sendFile(path.join(__dirname,'district.json'));
});

app.get("/categor", function(req, res){
     res.sendFile(path.join(__dirname,'schools-by-category.json'));
 });

app.get("/medium", function(req, res){
    res.sendFile(path.join(__dirname,'schools-by-medium.json'));
});
// app.use('/',express.static(path.join(__dirname,'./data')));



app.listen(3002, () => console.log('server started!!'))