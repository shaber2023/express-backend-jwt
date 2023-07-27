const mongoose = require('mongoose');
const myschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    home:{
        type:String,
        required:true
    },
    taka : {
        type:String,
        required:true
    },
    author:String
},{})

module.exports=mongoose.model('studentData',myschema)