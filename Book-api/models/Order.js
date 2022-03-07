const mongoose=require('mongoose');
const Order=require('../models/Order');
const Schema=mongoose.Schema;
const OrderSchema=mongoose.Schema({
    order_id:Schema.Types.ObjectId,
    Books:[String],
    user_id:String,
    amount:Number,
    date:Date,
});

module.exports=mongoose.model('order',OrderSchema);