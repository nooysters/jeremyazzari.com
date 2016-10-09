const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.sendfile('public/index.html');
});

app.use(express.static('build'))
app.use(express.static('assets'))

app.listen(port, () => {
  console.log('app listening on port 3000!')
})
