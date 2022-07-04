const connectToMongo=require('./db')


const express = require('express')
const port = 5000
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())

connectToMongo();

app.use('/user/login',require('./routes/users'))





app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
