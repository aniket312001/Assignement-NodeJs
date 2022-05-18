
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{type:String,require:[true,'please provide name']},
    email:{type:String,require:[true,'please provide email'],unique:true},
    password:{type:String,require:[true,'please provide password']},
    role:{type:String}

})


module.exports = mongoose.model("User",UserSchema)