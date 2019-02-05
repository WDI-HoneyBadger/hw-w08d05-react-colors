const express = require('express');
const port = 3001;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var morgan = require('morgan');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('TV SHOWS!');
})

// ADD YOUR CONTROLLER HERE!!!
const colorsControllers = require('./controllers/colorsControllers');
app.use('/colors', colorsControllers);

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});