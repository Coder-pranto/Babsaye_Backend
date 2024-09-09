const express = require('express');
const connectDatabase = require('./database/dbConfig');
const colors = require('colors');
const morgan = require('morgan');
const cors = require("cors");
const cache = require('memory-cache');
const app = express();
const port = 5005;
const path = require('path');
const routes = require('./routes/index');


require("dotenv").config();
const corsOptions = {
  origin: 'http://localhost:5173', // Allow the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Explicitly list the methods you want to allow
  credentials: true, // Allow credentials (cookies, authorization headers)
  allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with', 'Origin'], // Headers you want to allow
  optionsSuccessStatus: 200 // Response for successful OPTIONS requests
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1', routes); // Use the consolidated routes


//default
app.get('/', (req, res) => {
  res.send(`Hello, Babsaye Server is Running!`);
});


// Clear cache endpoint
app.post('/api/v1/clear-cache', (req, res) => {
  cache.clear(); 
  res.status(200).send('Cache cleared successfully');
});


//route error 
app.use((req,res,next)=>{
  res.status(404).json({Message: "route not found"})
})


//handling server side error
app.use((err,req,res,next)=>{
  res.status(500).json({message:'something is broke'});
})


app.listen(port, () => {
  console.log(`> Server is up and running on : http://localhost:${port} `.green.bgWhite);
  connectDatabase();
});
