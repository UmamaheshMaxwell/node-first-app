const express = require("express")
const app = express(); 

const PORT = 4000;

app.use(express.static(__dirname + "/public"))
app.get("/", function(req, res){
    res.send("Welcome to NodeJS")
})

app.listen(PORT, function(){
    console.log("Server Listening at PORT " + PORT)
})

