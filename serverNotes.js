// sets 'dev-environment' 
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
// console.log(process.env)
console.log(process.env.MONGODB_URI) // another name for MONGO_STRING (i.e. name in Heroku)

//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const methodOverride  = require('method-override');
const app = express ();
const db = mongoose.connection; // allows you not to type it multiple times
// const show = console.log
// const c = console.log

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
// sets the PORT to process.env.port || or DEFAULT 3000 
// this is required for HEROKU (cause once deployed ONLINE, Heroku assigns random PORT)
// Herokue goes in and assign
const PORT = process.env.PORT || 3000; // <== needs to allow Heroku set .env port || or 3000

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
    // in PROD vs. DEV 
        // Heroku will assign MONGODV_URI 
                // On Heroku Website - the PROD-environment ; but we're going to assign this
const MONGODB_URI = process.env.MONGODB_URI; // <== We will Heroku sets in website
// || 'mongodb://localhost/'+ `YOUR DATABASE NAME`

// Connect to Mongo // previously it was mongoose.connection.once()
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});

// Error / success 
// EXECUTES on EVENT of ERROR // or CONNECT then prints this EVENT-HANDLER! for the connection 
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{console.log("I'm open")});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));