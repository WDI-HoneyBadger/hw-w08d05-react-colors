DROP DATABASE IF EXISTS color_api;
CREATE DATABASE color_api;
\c color_api

CREATE TABLE colors(
  id serial primary key, 
  name varchar, 
  red int, 
  green int, 
  blue int
  
  
);

INSERT INTO colors (name, red, green, blue) VALUES ('DIMGRAY', 105 , 105 , 105);
INSERT INTO colors (name, red, green, blue) VALUES ('SALMON', 250 ,128 ,114 );
INSERT INTO colors (name, red, green, blue) VALUES ('CADETBLUE', 95 ,158 ,160);
INSERT INTO colors (name, red, green, blue) VALUES ('LEMONCHIFFON',255 ,250 ,205);

  