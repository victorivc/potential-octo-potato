var bodyParser = require('body-parser')
var express = require('express')
var app = express()
const port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/welcome', urlencodedParser, function (req, res) {
  res.send('Welcome, ' + req.body.name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})