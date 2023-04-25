//making a schema for mingodb

const mongoose= require('mongoose');
//as an object
let userSchema =new mongoose.Schema({
        _id:mongoose.Schema.Types.ObjectId,
        name:String,
        email:String,
        country:String
});

//for exporting
module.exports=mongoose.model('Users',userSchema);