const connection = require('../db/config');

const color = {};

// create a method that gets all the data from the "colors" table
color.getAll = (req, res, next) => {
  connection.manyOrNone("SELECT * FROM colors;")  // query the database
    .then(result => {   // return the data as a javascript object "result"
      console.log('done');
      res.locals.colors = result;  // save that javascript object to the response object in res.locals.colors
      next();  // move on to the next command
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

color.find = function(req, res, next){
  connection.oneOrNone("SELECT * FROM colors WHERE id=$1;", [req.params.id])
    .then(result => {
      res.locals.color = result;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

color.create = function(req, res, next){
  connection.one("INSERT INTO colors (name, red, green, blue, hex) VALUES($1,$2,$3,$4,$5) RETURNING *;",
  [req.body.name, req.body.red, req.body.green, req.body.blue, req.body.hex])
    .then(result => {
      console.log('creating color');
      console.log(result);
      res.locals.color = result;
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

color.update = function(req, res, next){
  console.log(req.body);
  connection.one("UPDATE colors SET name = $1, red = $2, green = $3, blue = $4, hex = $5 WHERE id = $6 RETURNING *;",
  [req.body.name, req.body.red, req.body.green, req.body.blue, req.body.hex, req.params.id])
    .then(result => {
      res.locals.color = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

color.delete = function(req, res, next){
  connection.none('DELETE FROM colors WHERE id=$1;', [req.params.id])
    .then(()=>{
      console.log('successful delete');
      next();
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

module.exports = color;