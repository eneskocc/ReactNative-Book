const mongoose=require('mongoose');
const User=require('../models/User');
const Schema=mongoose.Schema;
const UserSchema=mongoose.Schema({
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

module.exports=mongoose.model('user',UserSchema);