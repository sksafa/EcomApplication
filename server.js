const express = require('express')
const colors = require('colors')
const moragan = require('morgan')
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
mongoose.set('strictQuery', true);
// dot env config
dotenv.config();
// rest object
const app = express()

// middleware..
app.use(express.json())
app.use(moragan('dev'))
// database...
mongoose.connect(process.env.MONGO_DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("database is connected"))
.catch((error)=>console.log("db connection error", error))

// routes
app.get('/',(req,res)=>{
   res.status(200).send({
    message: 'app is running'
   })
})

const port = process.env.PORT || 8080;
// listen port
app.listen(port,()=>{
    console.log(
        `server running in ${process.env.NODE_MODE} mode on port ${process.env.PORT} `
        .bgCyan.white
        )
})