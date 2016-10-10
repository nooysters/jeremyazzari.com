'use strict'

const express = require('express');
const app = express();
const penis = require('./backend/services/penis.js')

let port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`))
app.use(express.static(`${__dirname}/build`))
app.use(express.static(`${__dirname}/assets`))

app.get('/penis/:size', (req, res) => {
  res.send( penis(parseInt(req.params.size)) )
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
