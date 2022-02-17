const express = require("express");

const app = express();

const PORT = "3000";

app.get('/' , (req , res)=>{
    res.send("home")
})


app.listen(PORT ,() => {
    console.log(`listen the http://localhost:${PORT}`);
});