const connectToMongo=require('./db')


const express = require('express')
const port = 5000
const app = express()
var cors = require('cors')
app.use(cors())

app.use(express.json({limit: '50mb'}));

connectToMongo();

app.use('/user/login',require('./routes/users'))
app.use('/user/admin',require('./routes/board'))





app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})
