const connection = require('../db/config');

const color = {};


color.getAll = (req, res, next) => {
  connection.manyOrNone("SELECT * FROM colors;")  
    .then(result => {  
      console.log('done');
      res.locals.colors = result;  
      next();
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
  connection.one("INSERT INTO colors(name, hex, rgb, image, contrast) VALUES($1,$2,$3,$4, $5) RETURNING *;",
  [req.body.name, re.body.hex, req.body.rgb, req.body.image, req.body.contrast])
    .then(result => {
      res.locals.color = result;
      next()
    })
    .catch(error => {
      console.log(error);
      next();
    })
}

color.update = function(req, res, next){
  connection.one("UPDATE colors SET name = $1, hex = $2, rgb = $3, image = $4, contrast= $5 WHERE id = $6 RETURNING *;",
  [req.body.name, re.body.hex, req.body.rgb, req.body.image, req.body.contrast, req.params.id])
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