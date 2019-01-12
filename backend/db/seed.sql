DROP DATABASE IF EXISTS colors_api;
CREATE DATABASE colors_api;
\c colors_api

CREATE TABLE colors(
  id serial primary key, 
  name varchar, 
  rgb varchar, 
  hex varchar
);

INSERT INTO colors (name, rgb, hex) 
VALUES ('navy', '0, 0, 128', '#000080');

INSERT INTO colors (name, rgb, hex) 
VALUES ('pink rose', '255, 0, 127', '#FF007F');


