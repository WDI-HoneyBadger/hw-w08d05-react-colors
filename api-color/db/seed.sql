DROP DATABASE IF EXISTS color_api;
CREATE DATABASE color_api;
\c color_api
CREATE TABLE colors(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    hex VARCHAR,
    rgb VARCHAR,
    image VARCHAR,
    contrast VARCHAR
);

INSERT INTO colors (name, hex, rgb, image, contrast) VALUES
('Cerulean', '#24B1E0', 'rgb(36, 177, 224)', 'http://www.thecolorapi.com/id?format=svg&hex=24B1E0', '#000000'),
('Persian Rose', '#FF1493', 'rgb(255, 20, 147)', 'http://www.thecolorapi.com/id?format=svg&hex=FF1493', '#000000'),
('Aqua', '#00FFFF', 'rgb(0,255,255)', 'http://www.thecolorapi.com/id?format=svg&hex=00FFFF', '#000000');
