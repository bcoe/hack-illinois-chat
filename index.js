const bodyParser = require('body-parser');
const express = require('express')
const session = require('express-session')
const app = express()

app.use(bodyParser.json())
app.use(session({secret: '7cb98f81-e35a-4ea0-9a39-7568197c0593'}))

app.post('/login', function (req, res) {
  if (!req.body || !req.body.name) {
    res.send(500, {error: 'must provide name for login'})
  } else {
    req.session.name = req.body.name
    res.send({hello: req.body.name})
  }
})

app.get('/whoami', function (req, res) {
  const name = req.session.name || 'Anonymous'
  res.send({name})
})

app.post('/message', function (req,res) {
  
})

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`App Started on PORT ${port}`)
})

