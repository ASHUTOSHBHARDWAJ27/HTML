const express = require("express");
const path= require("path");
const { title } = require("process");


const app = express();
const port = 80;

// setup static floder
app.use('./static',express.static('static'))

// setup pug
app.set('view engine', 'pug')

// setup view path
app.set('views',path.join(__dirname,'views'))



// setup get and post
app.get("/app",(req,res)=>{
    res.status.apply(200).render('demo',{title:'app is runing',message:"app is running sussfully"})
})

app.get("/",(req,res)=>{
    res.status(200).send("testing ")
})

// listen the server
app.listen(port,()=>{
    console.log(`Server is running at ${port} `)
})