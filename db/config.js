const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'colors_db',
  user: 'anoud' ,// your username here!!
  password:1234567890
}

const connection = pgInstance(config);

module.exports = connection; 