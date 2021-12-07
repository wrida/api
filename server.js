const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI,(err)=> (
    err ? console.log(err) : console.log('database is connected')
))
const User = require('./models/User')
// routes 
app.use('/api/users',require('./routes/userRoutes'))

app.listen(3000,()=>console.log('server is running on port 3000'))