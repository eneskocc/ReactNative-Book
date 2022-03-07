const mongoose=require('mongoose');
const Movie=require('../models/Book');
const Schema=mongoose.Schema;
const BookSchema=mongoose.Schema({
    book_id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    category:String,
    content:String,
    number:Number,
    img:Number,
    price:Number,
    discount:Number,
    newPrice:Number,
});

module.exports=mongoose.model('movie',MovieSchema);