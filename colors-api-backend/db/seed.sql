DROP DATABASE IF EXISTS colors_db;
CREATE DATABASE colors_db;
\c colors_db


CREATE TABLE colors (
   id serial primary key,
   name varchar, 
   rgb_value varchar, 
   hex_value varchar

);

INSERT INTO colors (name,rgb_value,hex_value) VALUES ('LightPink','rgb(255,182,193)','#FFB6C1');
INSERT INTO colors (name,rgb_value,hex_value) VALUES ('moccasin','rgb(255,228,181)','#FFE4B5');
INSERT INTO colors (name,rgb_value,hex_value) VALUES ('turquoise','rgb(64,224,208)','#40E0D0');