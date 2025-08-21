const express = require('express')
const router = express.Router();

router.get('/tasks', (req, res) => {
  res.send('Using Router for homepage');
});

router.post('/tasks', (req, res) => {
  res.send('This is post request');
});

router.put('/tasks', (req, res) => {
  res.send('This is put request');
});

router.delete('/tasks', (req, res) => {
  res.send('This is delete request');
});

module.exports = router