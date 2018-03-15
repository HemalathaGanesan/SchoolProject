var fs=require('fs');
var Converter = require("csvtojson").Converter;
// create a new converter object
var converter = new Converter({});
var json;


converter.fromFile("./primaryschool.csv",function(err,result){

    if(err){
        console.log("An Error Has Occured");
        console.log(err);  
    } 
      json = result;

     console.log(json);

    fs.writeFile("school-converted.json",JSON.stringify(json),function(err,result)    
    {
        //console.log(result);
        if(err){
        console.log("An Error Has Occured");
        console.log(err);  
    } 
    var data = result;
      //console.log(data);
       
    })   
});



