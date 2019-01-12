const db = require('../db/config');
const colors = {};

colors.getAll = (req, res, next) =>{
    db.manyOrNone("SELECT * FROM colors;")  
      .then(function (result) {   
        res.locals.colors = result;  
        next(); 
      })
      .catch(function(error){ 
        console.log(error);
        next(); 
      })
  }
colors.create =(req, res)=>{
      db.one("INSERT INTO colors(name VALUES($1) RETURNING *;",[req.body.name])
      .then(function (result){
        res.locals.colors = result;  
        next();
      })
      .catch(function(error){ 
        console.log(error);
        next(); 
      })   
  }
colors.update =(req, res)=>{
    db.one("UPDATE colors SET name = $1 WHERE id = $2 RETURNING *;",
    [req.body.name])
    .then(function (result){
      res.locals.colors = result;  
      next();
    })
    .catch(function(error){ 
      console.log(error);
      next(); 
    })
    
}
colors.delete =(req, res)=>{
    db.none('DELETE * FROM colors  WHERE id=$1;', [req.params.id])
    .then(function (result){
      res.locals.colors = result;  
      next();
    })
    .catch(function(error){ 
      console.log(error);
      next(); 
    })
}
module.exports = colors;