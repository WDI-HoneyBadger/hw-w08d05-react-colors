const db = require('../db/config');

const colors = {};

colors.getAll = (req, res, next) => {
    db.manyOrNone("SELECT * FROM colors;")
    .then(result => {
        res.locals.colors = result;
        next();
    })
    .catch(error => {
        console.log(error);
        next();
    })
}

colors.create = (req, res, next) => {
    db.one("INSERT INTO colors (name, rgb, hex) VALUES ($1, $2, $3) RETURNING *;",
            [req.body.name, req.body.rgb, req.body.hex])
    .then(result => {
        res.locals.color = result;
        next();
    })
    .catch(error => {
        console.log(error);
        next();
    })
}

colors.update = (req, res, next) => {
    db.one("UPDATE colors SET name=$1, rgb=$2, hex=$3 WHERE id=$4 RETURNING *;",
            [req.body.name, req.body.rgb, req.body.hex, req.params.id])
    .then(result => {
        res.locals.color= result;
        next();
    })
    .catch(error => {
        console.log(error);
        next();
    })
}

colors.delete = (req, res, next) => {
    db.none("DELETE FROM colors WHERE id=$1;",
            [req.params.id])
    .then( ()=> {
        next();
    })
    .catch(error => {
        console.log(error);
        next();
    })
}

module.exports = colors;