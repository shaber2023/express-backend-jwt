const express = require('express');
const app = express();
const router = require('./router')
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/api',router)
require('./database/db')

app.use((req, res, next) => {
    next("route not found");
  });
  
  app.use((err, req, res, next) => {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send('Something went wrong');
    }
  });

app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})