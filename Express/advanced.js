const express = require('express')
const app = express()
const port = 3000

// app.get('/:name', (req, res) => {
//   res.send(`The name is ${req.params.name}`);
//   console.log('The URL is : ', req.url);
// console.log('The method is : ', req.method);
// })
app.get('/authors/:name', (req, res) => {
    res.send(`The author name is ${req.params.name} and the id is ${req.query.id}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})