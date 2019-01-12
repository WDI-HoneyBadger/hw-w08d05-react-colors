const express = require('express');
const port = 3000;
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


const colorsController = require('./controllers/colorController');
app.get('/', (req, res) => {
  res.send('colors picker!');
})


// ADD YOUR CONTROLLER HERE!!!
app.use('/colors', colorsController);


app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});

