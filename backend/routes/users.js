const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/UserSchema');
const jwt=require('jsonwebtoken');
const fetchuser=require("../middleware/fetchuser")

const JWT_SECRET="akash"


router.post("/createuser",
[
    body("name").isLength({min:3}),
    body("email").isEmail(),
    body("password").isLength({min:5})

],
async(req,res)=>{
    let success=false

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try{
        let exists =await User.findOne({email:req.body.email});
        if(exists){
            return res.status(400).json({success,error:"user alreasy exists"})
        }

        let salt =await bcrypt.genSalt(10)
        let password=await bcrypt.hash(req.body.password,salt)
        const user=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
        })

        let data={
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        console.log(authtoken);

        success=true
        res.json({success,authtoken})




    }catch(error){

    }

    
}
)

router.post("/login",
[
  body("email", "enter a valid").isEmail(),
  body("password", "Cannot be blank").exists(),
],async(req,res)=>{
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() ,error:"really" });
    }

    const email = req.body.email;
    const password = req.body.password;
    try{
        let user=await User.findOne({email})
        if (!user){
            return res.status(400).json({ error: "Please try to login again" });

        }
        const comparepassword=await bcrypt.compare(password,user.password)
        if (!comparepassword) {
            success=false
            return res.status(400).json({success, error: "Please try to login again" });
          }
          const data = {
            user: {
              id: user.id,
            },
          };
          const authtoken = jwt.sign(data, JWT_SECRET);
          console.log(authtoken);
          success=true
          res.json({success, authtoken });
    }catch (error) {
        console.log(error.message);
        res.status(500).send("some error from our side ");
      }
}


)

router.post(
    "/getuser",fetchuser,
    async (req, res) => {

        try{
        let userId=req.user.id
        const user=await User.findById(userId).select("-password")
        res.send(user)
        }catch (error) {
            console.log(error.message);
            res.status(500).send("some error from our side ");
          
        }

    }
        
        
        )

module.exports=router



