// const http=require('http');

// function dataControl(res,req){
//   req.write("hey, hi harsh");
//   req.end();
// }

// http.createServer(dataControl).listen(4500);


// const data=require('./data')
// const http=require('http');

// http.createServer((req,res) =>{
//   res.writeHead(200,{'content-Type': 'application/json'}) ;
//   res.write(JSON.stringify(data))
// }).listen(3500);


// const express=require('express');

// const app=express();
// // use app variable to make an API
// app.get('/', (req,res) => {
//   res.send('<h1>Welcome to the Home Page</h1> <a href="/about">Go To About Page </a> ') 
//   //property to send any message to API

// })

// app.get("/about", (req,res) => {
//   res.send(' <input type="text" placeholder="Username" />  <button>Click Here</button> <a href="/">Go To Home Page </a>')
// })
// app.listen(3500)

//Asyn function
// let a=50;
// let b= 30;
// //console.log("Project 1");

// setTimeout(() => {
// //console.log("Project 2");
// },3000)
// console.log(b);
// console.log(a+b);



const express= require('express');
const app= express();
//middleware function
const reqFilter=(req,res,next)=>{
    console.log('reqFilter')
    if(!req.query.age){
        res.send("plese enter your age");
    }
    else if(req.query.age <18){
        res.send("you cannot access  the page");
    }
    else{
    next();
    }
}
app.use(reqFilter)  

app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to About Page");
})

app.listen(4500);