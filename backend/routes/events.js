const Events =require('../models/EventsSchema')
const express = require('express')
const router = express.Router();


 router.post('/addevent',async(req,res)=>{

    const {description,name,image}=req.body
    try{
        const adddata=new Events({
            description:description,
            name:name,
            image:image,
        })
       const data= await adddata.save()
       res.status(200).json({data:data})

    }catch(error){
        res.status(500).send('Problem from our side')
    }


 })

 router.get('/allevents',async(req,res)=>{


    try{
       
      const data=await Events.find().sort('_id:-1')
       res.status(200).json(data)

    }catch(error){
        res.status(500).send('Problem from our side')
    }


 })

router.delete('/deleteevent/:id',async(req,res)=>{
    let id=req.params.id
    let user=await  Events.findByIdAndDelete(id)
    res.status(200).json({status:'sucess'})

})


module.exports=router