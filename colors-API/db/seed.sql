DROP DATABASE IF EXISTS color_api;
CREATE DATABASE color_api;
\c color_api

CREATE TABLE colors(
    id serial primary key,
    name varchar,
    rgb varchar,
    hex varchar
);

INSERT INTO colors (name, rgb, hex) VALUES
('Red', 'rgb(0, 71, 171)', '#ff0000'),
('Yellow', 'rgb(255, 255, 0)', '#ffff00'),
('Blue', 'rgb(0, 0, 255)', '#0000ff');