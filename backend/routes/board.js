const express = require("express");

const Board=require('../models/BoardMembersSchema')


const router = express.Router();


router.post('/createbod',async(req,res)=>{
 try{
    const {photo,post,year}=req.body
    console.log("photo")

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(200).json({error:errors.array()})

    }
    const pic=new Board({
        post:post,
        year:year,
        photo:photo
    })
    const savedpic=await pic.save();
 }catch(error){
    console.log(error.message);
    res.status(500).send("some error from our side ");
 }

})

module.exports=router