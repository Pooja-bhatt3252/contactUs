const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5001;
const connectToDatabase = require('./db')
connectToDatabase();


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!----')
  })
app.use('/api',require('./api/addData'));


app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})