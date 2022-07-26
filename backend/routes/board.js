const express = require("express");

const Board=require('../models/BoardMembersSchema')
const {  validationResult,body } = require('express-validator');

const router = express.Router();


router.post('/createbod',[
    body("name").isLength({min:3}),
    body("post").isLength({min:3}),
  
],async(req,res)=>{

 try{
    const {photo,post,year,name}=req.body
 

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(200).json({error:errors.array()})

    }
    const pic=new Board({
        name:name,
        post:post,
        year:year,
        photo:photo
    })
    const savedpic=await pic.save();
   
    return res.status(200).json({data:savedpic})
   
 }catch(error){
   
    res.status(500).send("some error from our side ");
 }

})


router.get('/getbod',[
    

],async(req,res)=>{

 try{
    const bod=await Board.find()
    res.json(bod)

 


   
 }catch(error){
   
    res.status(500).send("some error from our side ");
 }

})


module.exports=router