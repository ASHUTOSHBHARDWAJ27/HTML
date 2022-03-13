// Import package
const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyparser = require("body-parser")
var mongoose = require('mongoose');

// database setup

mongoose.connect("mongodb://localhost/Order", {useNewUrlParser: true , useUnifiedTopology: true });


// Setup schema
const OrderContent = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    order: String,

  },{ timestamps: true });
// Setup model
const order = mongoose.model('OrderDetail',OrderContent );


// App variable
const app = express();
const port = 8000;

// Setup static folder
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// Setup template engine
// app.set('view engine', 'html');
app.set('views',path.join(__dirname,'views'));

// Setup server
app.get('/',(_req,res)=>{
    res.setHeader('home', 'home')
    res.sendFile(__dirname + '/views/index.html');
})
app.get('/contact',(req,res)=>{
    res.setHeader('contact', 'contact')
    res.sendFile(__dirname + '/views/contact.html');
})
app.post('/',(req ,res)=>{
    
    var Data = new order(req.body)
    Data.save().then(()=>{
        res.setHeader('data', 'Order')
        res.send("Send Successfully")
        return
        
        console.log(err)
    }).catch(()=>{
        res.setHeader('datanot', 'Ordernot')
        res.status(400).send("Send Unsuccessfully")
        return;
    })   

})

// Listen the serve
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})