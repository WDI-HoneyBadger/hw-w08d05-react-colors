-- add your seed data here!!!! 
DROP DATABASE IF EXISTS color_api;
CREATE DATABASE color_api;
\c color_api
CREATE TABLE colors(id serial primary key, name varchar, red varchar, green varchar, blue varchar, hex varchar);
INSERT INTO colors (name, red, green, blue, hex) VALUES ('Red', '255', '0', '0', '#FF0000'), ('Green', '0', '255', '0', '#00FF00'), ('Blue', '0', '0', '255', '#0000FF')