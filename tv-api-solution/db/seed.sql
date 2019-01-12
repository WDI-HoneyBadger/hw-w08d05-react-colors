DROP DATABASE IF EXISTS tv_colors;
CREATE DATABASE tv_colors;
\c tv_colors


CREATE TABLE colors(
  id serial primary key, 
  hex varchar, 
  rgb varchar, 
  hsl varchar, 
  cmyk varchar
);

INSERT INTO  colors (hex, rgb, hsl, cmyk) VALUES ('#7F0D7B', '127, 13, 123', '302, 81%, 27%', '0, 90, 3, 50' ),
INSERT INTO  colors (hex, rgb, hsl, cmyk) VALUES ('#7F0D7B', '127, 13, 123', '302, 81%, 27%', '0, 90, 3, 50'),
INSERT INTO  colors (hex, rgb, hsl, cmyk) VALUES ('#7F0D7B', '127, 13, 123', '302, 81%, 27%', '0, 90, 3, 50'),
INSERT INTO  colors (hex, rgb, hsl, cmyk) VALUES ('#327F44', '50, 127, 68', '134, 44%, 35%', '61, 0, 46, 50'),
INSERT INTO  colors (hex, rgb, hsl, cmyk) VALUES ('#5F6D0C', '95, 109, 12', '69, 80%, 24%', '13, 0, 89, 57');
