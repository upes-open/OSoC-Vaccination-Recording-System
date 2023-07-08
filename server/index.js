const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 3000;

connectToMongo();

app.use(express.json()) 

app.use('/routes', require('./routes/routes'))  

app.listen(port, () => {
    console.log(`backend listening on port :  ${port}`)
  })