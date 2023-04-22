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

const express=require('express');

const app=express();
// use app variable to make an API
app.get('/', (req,res) => {
  res.send('<h1>Welcome to the Home Page</h1> <a href="/about">Go To About Page </a> ') 
  //property to send any message to API

})

app.get("/about", (req,res) => {
  res.send(' <input type="text" placeholder="Username" />  <button>Click Here</button> <a href="/">Go To Home Page </a>')
})
app.listen(3500)

