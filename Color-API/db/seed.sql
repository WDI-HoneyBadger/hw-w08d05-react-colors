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
VALUES ('purple', '149, 1, 179', '#9501B3');

INSERT INTO colors (name, rgb, hex) 
VALUES ('blue gray', '16, 3, 164', '#1003A4');


