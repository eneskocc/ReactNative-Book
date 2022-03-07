const mongoose=require('mongoose');
const Book=require('../models/Book');
const Schema=mongoose.Schema;
const BookSchema=mongoose.Schema({
    user_id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    username:String,
    age:Date,
    addres:String,
    img:String,
    phone:Number,
    eposta:Number,
    orders:[],
});

module.exports=mongoose.model('book',BookSchema);