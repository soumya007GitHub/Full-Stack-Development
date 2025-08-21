const express = require('express')
const app = express()
const taskRouter = require('./tasks.router');
const port = 3000

app.use('/', taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})