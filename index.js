const express = require('express');
const mongoose = require('mongoose');
const app=express();
const dotenv = require('dotenv');
//Route imports

dotenv.config();

//mongo connect
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true},()=>{console.log("Mongo Connection Success");});


const authRoute = require('./routes/auth');


//global middlewares

app.use(express.json());

//route middleware
app.use('/api/user',authRoute);









app.listen(6904,()=>{console.log("The server is listening on 6904");});

