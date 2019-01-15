
DROP DATABASE IF EXISTS react_colors;
CREATE DATABASE react_colors;
\c react_colors

CREATE TABLE colors(
  id serial primary key,
  name varchar,
  hex varchar,
  red int,
  green int,
  blue int
);