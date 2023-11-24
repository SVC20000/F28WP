const express = require ("express");
const mysql = require ("mysql");
const dotenv = require ("dotenv");
const path = require ("path");
const cookieParser = require('cookie-parser');
const port = 4444;
const app = express();

//dotenv.config({path:'./.env'});
require('dotenv').config();

const db = mysql.createConnection({

  host : process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  port: process.env.DATABASE_PORT
});
app.use(express.static('public'));
app.use(express.static('controllers'));



// SetUp our public directory where we put our static pages style.css and js 

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//setUp our middleware that is responsible for parsing incoming request bodies 
//urlencoded({extended: false}) this one
// The express.urlencoded middleware is used to parse incoming requests with URL-encoded payloads
// and it is used when we want to sending simple form data 
//(like text fields, checkboxes, and radio buttons) from the client to the server. 
app.use(express.urlencoded({extended: false})); 

//SetUp the middleware function that is used to parse incoming requests with JSON payloads. 
//Essentially, it allows an Express application to understand and process JSON data 
//sent in the body of requests.
app.use(express.json());

// Use cookie-parser
app.use(cookieParser());

app.set('view engine', 'hbs');

db.connect ((error)=>{
if(error){
    console.log(error)
}
    else {
        console.log("MySql connected..")
    }
   
});

module.exports=db;


//Define Routes

app.use('/',require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen (port, () =>{
    console.log(`Server started on port ${port}`);
    })

    



