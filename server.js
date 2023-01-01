const express=require("express");
const app=express();

app.get('/',function(req,resp){

resp.send("welcome !!!!!");
});

app.listen(4000,function(){
console.log("server running on port 4000");

});
