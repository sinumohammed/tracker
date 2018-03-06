const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
console.log('hello')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, resp) => {
  resp.send({
    message: `Hello ${req.body.email}! your user was created. Have fun`
  })
})

app.listen(process.env.PORT || 8084)
