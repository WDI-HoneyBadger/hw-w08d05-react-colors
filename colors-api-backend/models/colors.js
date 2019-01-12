const db = require('../db/config');

const colors ={}

colors.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM colors;')
    .then((data) => {
        res.locals.colors = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

colors.create = (req,res,next) =>{
    db.one('INSERT INTO colors (name,rgb_value,hex_value) VALUES ($1,$2,$3) RETURNING *;', [req.body.name,req.body.rgb_value,req.body.hex_value])
    .then((data) =>{
        res.locals.color = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

colors.update = (req,res,next) =>{
    db.one('UPDATE colors SET name=$1 ,rgb_value=$2 ,hex_value=$3 WHERE id=$4 RETURNING *;',[req.body.name,req.body.rgb_value,req.body.hex_value, req.params.id] )
    .then((data)=>{
        res.locals.color=data;
        next();
    })
    .catch((error)=>{
        console.log(error);
        next();
    })
}

colors.delete = (req,res,next)=>{
    db.none('DELETE FROM colors WHERE id=$1;', [ req.params.id])
    .then((data)=>{
        next();
    })
    .catch((error) =>{
        console.log(error);
        next();
    })
}

module.exports=colors;