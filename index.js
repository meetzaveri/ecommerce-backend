const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const controller = require('./controllers');

app.use(cors());

const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('/', controller.getItems);
app.post('/filter', controller.filterItems);

app.listen(port, () => {
  console.log('We are live on port ', port);
});
