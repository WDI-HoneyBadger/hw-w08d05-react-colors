const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
    host: 'localhost',
    port: 5432,
    database: 'color_api',
    user: 'postgres',
    password: '200100'
}
const connection = pgInstance(config);

module.exports = connection;