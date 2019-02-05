
const db = require('../db/config');
const color = {};

color.getAll = (req, res, next) => {
  db.manyOrNone('SELECT * FROM colors;')
    .then((data) => {
      res.locals.colors = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

color.create = (req, res, next) => {
  db.one('INSERT INTO colors (name, rgb, hex, hex) VALUES($1, $2, $3, $4) RETURNING *;',
    [req.body.name, req.body.rgb, req.body.hex, req.body.hex])
    .then((data) => {
      res.locals.color = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

color.update = (req, res, next) => {
  db.one('UPDATE colors SET name=$1, rgb=$2, hex=$3, hex=$4 WHERE id=$5 RETURNING *;',
  [req.body.name, req.body.rgb, req.body.hex, req.body.hex, req.params.id])
    .then((data) => {
      res.locals.color = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

color.delete = (req, res, next) => {
  db.none('DELETE FROM colors WHERE id=$1', [req.params.id])
    .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = color;