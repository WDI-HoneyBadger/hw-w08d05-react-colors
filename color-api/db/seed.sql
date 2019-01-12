DROP DATABASE IF EXISTS colors_api;
CREATE DATABASE colors_api;

\c colors_api

CREATE TABLE colors(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    rgb VARCHAR,
    hex VARCHAR
);

INSERT INTO colors(name, rgb, hex) VALUES ('black', 'rgb(0,0,0)', '#000000');