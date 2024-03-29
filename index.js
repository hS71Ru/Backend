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


//Application Route
// const express= require('express');
// const app= express();
// const reqFilter=require('./middleware.js')

//middleware function
// const reqFilter=(req,res,next)=>{
//     console.log('reqFilter')
//     if(!req.query.age){
//         res.send("plese enter your age");
//     }
//     else if(req.query.age <18){
//         res.send("you cannot access  the page");
//     }
//     else{
//     next();
//     }
// }
//app.use(reqFilter)  

// app.get('/',(req,res)=>{
//     res.send("Welcome to Home Page");
// })

// app.get('/about',reqFilter, (req,res)=>{
//     res.send("Welcome to About Page");
// })

// app.get('/profile',(req,res)=>{
//     res.send("Welcome Profile Page");
// })

// app.get('/contact',(req,res)=>{
//     res.send("Welcome to Contact Page");
// })

// app.listen(4500);



//Connecting mongoDB
const express= require('express');
const app= express();
const mongoose=require('mongoose');
const User=require('./users');
var bodyParser=require('body-parser');
var jsonParser=bodyParser.json();
//mongodb+srv://hs71ru:<password>@cluster0.6y3abdl.mongodb.net/?retryWrites=true&w=majority

mongoose.connect('mongodb+srv://hs71ru:zVReLK2gFIYsjTSM@cluster0.6y3abdl.mongodb.net/Town?retryWrites=true&w=majority/',

{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);
//.then(()=>{
//     console.warn('DB connected succesfully');
// })
 //mongodb+srv://hs71ru:<password>@cluster0.6y3abdl.mongodb.net/?retryWrites=true&w=majority
// User.find({},function(err,users){
//     if(err){
//         console.warn(err);
//         console.warn(users);
//     }
    
// })

// const data =new User({
//     _id:new mongoose.Types.ObjectId(),
//     name:"Akash",
//     email:"ar@gmail.com",
//     country:"India"
// })
// data.save().then((result)=>{
//     console.warn(result);
// }) 
//     .catch(err=>console.warn(err))

//making API-GET/post method
app.get('/users',function(req,res){
    User.find().then((data)=>{
        res.status(201).json(data);
    })
})
app.post('/user',jsonParser,function(req,res) {
   // res.end(req.body.name);
    const data=new User({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    email:req.body.email,
    country:req.body.country
    })
    data.save().then((result)=>{
        res.status(201).json(result)
    })
    .catch((error)=>{
        console.warn(error)
    })
})
app.delete('/user/:id',function(req,res){
    User.deleteOne({id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.warn(err)
    })
})

app.put('/user/:id',jsonParser,function(req,res){
    User.updateOne(
        {_id:req.params.id},
        {$set:{name:req.body.name}}  
    ).then((result)=>{
    res.status(201).json(result)
    }).catch((error)=>{
        console.warn(error);
    })
})
app.get('/search/:name',function(req,res){
    
    var regex=new RegExp((req.params.name),'i');
    User.findOne({name:regex}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        console.warn(error);
    })
})
app.listen(3500)