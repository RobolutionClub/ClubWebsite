const mongoose = require('mongoose');

const connectToMongo=()=> {
     mongoose.connect('mongodb://localhost:27017/robolution'),
     ()=>{
        console.log("connectio with db sucessful")
     }

  }

module.exports=connectToMongo;