const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Homepage!')
})
app.get('/users', (req, res) => {
  res.send('Users page!')
})
app.get('/about', (req, res) => {
  res.send('About Us Page!')
})
app.get('/contact', (req, res) => {
  res.send('Contact Us Page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})