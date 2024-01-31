const express = require("express");

const app = express();

app.get("/api/test", function(req, res){
    res.json({message:"Working"})
})

app.listen(4000)