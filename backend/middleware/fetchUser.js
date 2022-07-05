const jwt = require("jsonwebtoken");
const JWT_SECRET = "akash";


const fetchuser=async (req,res,next)=>{
    const token=req.header('auth-token')
    console.log(token +"etttette")
    if (!token){
        res.status(401).send({error:"please use a valid token"})

    }
    try{
        console.log("workin till here")
        const data=jwt.verify(token,JWT_SECRET)
        console.log("verifying")
        req.user=data.user
        next()

    } catch (error) {
        res.status(401).send({error:"please use a valid token dwd"})
    }


}
module.exports=fetchuser;