const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Kirill Krasauchic');
});

app.listen(port, () => {
  console.log('Yakas huita app listening on port 3000');
});
