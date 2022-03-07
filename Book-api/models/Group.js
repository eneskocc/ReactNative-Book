const mongoose=require('mongoose');
const Book=require('../models/Book');
const Schema=mongoose.Schema;
const BookSchema=mongoose.Schema({
    group_id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    Books:[],
  
});

module.exports=mongoose.model('book',BookSchema);