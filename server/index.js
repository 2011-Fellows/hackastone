const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static file-serving middleware
// app.use(express.static(path.join(__dirname, '..', 'build')))

//forwarding api requests to the api folder
app.use('/api', require('./api'))

// sends index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build/index.html'))
// })
// app.get('/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' })
// })

// error handling endware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
