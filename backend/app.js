require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const options = {
  definition: {
    openapi:  "3.0.0",
    info: {
      title: "Shopasi API Collections",
      version: "1.0.0",
      description: "SHOPASI SOFTWARE API v2.2"
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: 'http',
          schema: 'bearer',
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: [],
      }
    ],
    servers: [
      {
        url: "https://plum-nutty-oyster.cyclic.app/"
              
      },
      {
        url: "http://localhost:3220/"
      }
    ],
  },

  apis: ["./routes/*.js"]
}

const app = express()

const specs = swaggerJsDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.get('/', (req, res) => {
  res.send('Shopasi Api')
})

const dataRoutes = require('./routes/data')

app.use('/scraper',  dataRoutes)

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