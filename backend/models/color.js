const db = require('../db/config');
const colors = {};

colors.getAll = (req, res, next) => {
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
colors.create = (req, res, next) => {
  db.one('INSERT INTO colors (name, rgb, hex) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.rgb, req.body.hex])
    .then((data) => {
      res.locals.colors = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

colors.update = (req, res, next) => {
  db.one('INSERT INTO colors (name, rgb, hex) VALUES($1, $2, $3) RETURNING *;',
  [req.body.name, req.body.rgb, req.body.hex])
      .then((data) => {
      res.locals.show = data;
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

colors.delete = (req, res, next) => {
  db.one('INSERT INTO colors (name, rgb, hex) VALUES($1, $2, $3) RETURNING *;',
    [req.body.name, req.body.rgb, req.body.hex])
     .then((data) => {
      next();
    })
    .catch((error) => {
      console.log(error)
      next();
    })
}

module.exports = colors;