const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
let MongoClient = require('mongodb').MongoClient
app.use(express.urlencoded({extended:true}));

const productRoute = require('./routes/api/productRoute');

// Connecting to the Database
let mongodb_url = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`
let dbName = 'yolomy';

// define a url to connect to the database
let mongoUrlK8s = `mongodb://${process.env.USER_NAME}:${process.env.USER_PWD}@${process.env.DB_URL}`
let MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true  }
MongoClient.connect(mongoUrlK8s, MongoClientOptions)


const MONGODB_URI = process.env.MONGODB_URI || mongodb_url + dbName
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
    console.log(`${process.env.USER_NAME},${process.env.USER_PWD},${process.env.DB_URL}`)
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
    console.log('Testing Error')
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})