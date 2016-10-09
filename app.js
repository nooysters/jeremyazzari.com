var express = require('express');
var app = express();

app.get('/', (req,res) => {
  res.sendfile('public/index.html');
});

app.use(express.static('build'))
app.use(express.static('assets'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
