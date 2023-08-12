require('dotenv').config(); 

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const connectDB = require('./server/config/db');

//connect to db
connectDB();


const app = express();
const port = 8080 || process.env.PORT;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Static files
app.use(express.static('public'));

//templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes
app.use('/', require('./server/routers/toyproducts'))
//home
app.get('*', (req,res) => {
    res.status(404).render('404');
})

app.listen(port, () => {
    console.log(`Listen on ${port}`)});

