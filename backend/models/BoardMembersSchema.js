const mongoose = require('mongoose');
const {Schema}=mongoose;


const bodSchema=new Schema({
    post:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    photo:{
        type:String
    }
})

const Database=mongoose.model('board',bodSchema)
module.exports=Database