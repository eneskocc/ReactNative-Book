const mongoose=require('mongoose');
const Group=require('../models/Group');
const Schema=mongoose.Schema;
const GroupSchema=mongoose.Schema({
    group_id:Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    Books:[],
  
});

module.exports=mongoose.model('group',GroupSchema);