
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{type:String,require:[true,'please provide name'],minlength:3,maxlength:50},
    type:{type:String,require:true},
    category:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
    userId:{type:String,required:true},
    additional_info :{type:String},


})


module.exports = mongoose.model("Product",ProductSchema)