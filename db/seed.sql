DROP DATABASE IF EXISTS colors_db;
CREATE DATABASE colors_db;
\c colors_db

CREATE TABLE colors(
  id serial primary key, 
  name varchar, 
  rgb varchar, 
  hex varchar
);

INSERT INTO colors (name,rgb,hex) VALUES ('green','rgb(0, 102, 0)','#006600'),
('Red','rgb(204, 0, 0)','#cc0000') ,
('orange','rgb(255, 153, 0)','#ff9900') ,
('blue','rgb(51, 51, 255)','#3333ff') ,
('yellow','rgb(255, 255, 0)',' #ffff00') ,
('pink','rgb(255, 128, 223)','#ff80df') ,
('parple','rgb(172, 0, 230)','#ac00e6') ; 