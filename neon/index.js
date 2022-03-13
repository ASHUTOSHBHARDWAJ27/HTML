const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const hostname= '127.0.0.1';
const port = 80;


const home=fs.readFileSync("./index.html");
const neon = fs.readFileSync("./neon.html");
const neontwo = fs.readFileSync("./neontwo.html");

const server=http.createServer((req,res)=>{
    console.log(req.url);
    let url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.end(home);
    } 
     
    else if(url=='/neon'){
        res.end(neon);
    }
    
    else if(url=='/neontwo'){
        res.end(neontwo);
    }
    else{
        res.statusCode=404
        res.end("<h1>page not found</h1>")
    }
})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}/`);
})