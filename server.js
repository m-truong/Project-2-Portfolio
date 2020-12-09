// ===================
// SET DEV ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
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
const PORT = process.env.PORT || 3000; // <== needs to allow Heroku set .env port || or 3000

//___________________
//Database
//___________________
const MONGODB_URI = process.env.MONGODB_URI; // <== We will Heroku sets in website
// Connect to Mongo // previously it was mongoose.connection.once()
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true});
// Error / success 
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{console.log("Connected to MongoDB Atlas")});

//___________________
//Middleware
//___________________

app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: true }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method')); // allow POST, PUT and DELETE from a form

// __________________
// VIEW ENGINE
// __________________
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ===========
// CONTROLLER
// ===========
const projectController = require('./controllers/projectController.js')
app.use('/projects', projectController)

//___________________
// Non-Rest Routes
//___________________
//localhost:3000 - Home
app.get('/' , (req, res) => {
  res.send('Home');
});
// About
app.get('/about' , (req, res) => {
    res.send('About');
  });
// Contact
app.get('/contact' , (req, res) => {
    res.send('Contact');
  });

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));