const mongoose=require('mongoose');
const Book=require('../models/Book');
const Schema=mongoose.Schema;
const BookSchema=mongoose.Schema({
    order_id:Schema.Types.ObjectId,
    Books:[String],
    user_id:String,
    amount:Number,
    date:Date,
});

module.exports=mongoose.model('book',BookSchema);