require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT

app.listen(port,
  console.log(`server is running on port ${port}`)
)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
  console.log('Database connected');
})
.catch(err => {
  console.log(err);
})