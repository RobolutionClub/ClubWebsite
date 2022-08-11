const mongoose = require('mongoose');
const {Schema}=mongoose;


const EventsSchema= new Schema({
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    }
})

const Events=mongoose.model("Events",EventsSchema)
module.exports=Events

