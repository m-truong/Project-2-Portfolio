// ===================
// SET DEV ENVIRONMENT
// ===================
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}
console.log(process.env.MONGODB_URI) 

//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const db = mongoose.connection; 

//___________________
//Port
//___________________
const PORT = process.env.PORT || 3000; 

//___________________
//Database
//___________________
const MONGODB_URI = process.env.MONGODB_URI; 
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Error / success 
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log("Connected to MongoDB Atlas")
});

//___________________
//Middleware
//___________________

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
})); 
// app.use(express.json());

app.use(methodOverride('_method'));

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
// const blogController = require('./controllers/blogController.js')
// app.use('/blogposts', blogController)

//___________________
// Non-Rest Routes
//___________________
// Home
app.get('/', (req, res) => {

});
// About
app.get('/about', (req, res) => {
    res.redirect('/html/about.html');
});
// Contact
app.get('/contact', (req, res) => {
    res.redirect('/html/contact.html');
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));