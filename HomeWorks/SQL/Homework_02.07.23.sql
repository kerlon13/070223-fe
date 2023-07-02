CREATE DATABASE tmp5;
USE tmp5;
CREATE TABLE users (
  id INT PRIMARY KEY,
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  age INT,
  gender CHAR(1)
);

INSERT INTO users (id, firstname, lastname, age, gender)
VALUES
  (1, 'Анатолий', 'Ушанов', 28, 'm'),
  (2, 'Светлана', 'Демидова', 25, 'f'),
  (3, 'Никита', 'Иванов', 33, 'm'),
  (4, 'Ольга', 'Петрова', 22, 'f');
  
CREATE TABLE workers (
  id INT PRIMARY KEY,
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  position VARCHAR(64),
  salary DECIMAL(8, 2)
);

INSERT INTO workers (id, firstname, lastname, position, salary)
VALUES
  (1, 'Петр', 'Сергеев', 'CEO', 7000),
  (2, 'Виктор', 'Семенов', 'Web-developer', 5000),
  (3, 'Никита', 'Петров', 'Assistant', 3500),
  (4, 'Инна', 'Орлова', 'Accountant', 4500);
  

CREATE TABLE fruits (
  id INT PRIMARY KEY,
  title VARCHAR(64),
  price DECIMAL(8, 2),
  count INT
);

INSERT INTO fruits (id, title, price, count)
VALUES
  (1, 'Apple', 280, 4),
  (2, 'Lemon', 300, 8),
  (3, 'Lime', 500, 3),
  (4, 'Orange', 200, 8);

CREATE TABLE vegetables (
  id INT PRIMARY KEY,
  title VARCHAR(64),
  price DECIMAL(8, 2),
  count INT,
  country VARCHAR(64)
);

INSERT INTO vegetables (id, title, price, count, country)
VALUES
  (1, 'Potato', 370, 5, 'Germany'),
  (2, 'Onion', 320, 3, 'Poland'),
  (3, 'Tomato', 210, 9, 'Spain'),
  (4, 'Carrot', 280, 4, 'France');



