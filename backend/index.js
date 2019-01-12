const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Color app');
})

// ADD YOUR CONTROLLER HERE!!!
const showsController = require('./controllers/ShowController');
app.use('/colors', showsController);

app.listen(port, () => {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
});