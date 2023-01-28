require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swaggerJsDocs = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()

app.get('/', (req, res) => {
  res.send('Shopasi Api')
})

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