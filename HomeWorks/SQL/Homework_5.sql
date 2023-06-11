CREATE DATABASE school;
USE school; 
-- 1
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  age INTEGER
);
-- 2
CREATE TABLE teachers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128) NOT NULL,
  age INTEGER
);
-- 3 
CREATE TABLE competencies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128) NOT NULL
);
-- 4
CREATE TABLE teachers2competencies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INTEGER,
  competency_id INTEGER
  );
-- 5
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INTEGER,
  title VARCHAR(128) NOT NULL,
  headman_id INTEGER
);
-- 6
CREATE TABLE students2courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INTEGER,
  course_id INTEGER
);
-- 7
INSERT INTO students (name, age) VALUES ("Анатолий", 29);
INSERT INTO students (name, age) VALUES ("Олег", 25);
INSERT INTO students (name, age) VALUES ("Семен", 27);
INSERT INTO students (name, age) VALUES ("Олеся", 28);
INSERT INTO students (name, age) VALUES ("Ольга", 31);
INSERT INTO students (name, age) VALUES ("Иван", 22);
-- 8
INSERT INTO teachers (name, age) VALUES ("Петр", 39);
INSERT INTO teachers (name, age) VALUES ("Максим", 35);
INSERT INTO teachers (name, age) VALUES ("Антон", 37);
INSERT INTO teachers (name, age) VALUES ("Всеволод", 38);
INSERT INTO teachers (name, age) VALUES ("Егор", 41);
INSERT INTO teachers (name, age) VALUES ("Светлана", 32);
-- 9
INSERT INTO competencies (title) VALUES ("Математика");
INSERT INTO competencies (title) VALUES ("Информатика");
INSERT INTO competencies (title) VALUES ("Программирование");
INSERT INTO competencies (title) VALUES ("Графика");
-- 10
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (1, 1);
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (2, 1);
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (2, 3);
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (3, 2);
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (4, 1);
INSERT INTO teachers2competencies (teacher_id, competency_id) VALUES (5, 3);
-- 11
INSERT INTO courses (teacher_id, title, headman_id) VALUES (1, "Алгебра логики", 2);
INSERT INTO courses (teacher_id, title, headman_id) VALUES (2, "Математическая статистика", 3);
INSERT INTO courses (teacher_id, title, headman_id) VALUES (4, "Высшая математика", 5);
INSERT INTO courses (teacher_id, title, headman_id) VALUES (5, "Javascript", 1);
INSERT INTO courses (teacher_id, title, headman_id) VALUES (5, "Базовый Python", 1);
-- 12
INSERT INTO students2courses (student_id, course_id) VALUES (1, 1);
INSERT INTO students2courses (student_id, course_id) VALUES (2, 1);
INSERT INTO students2courses (student_id, course_id) VALUES (3, 2);
INSERT INTO students2courses (student_id, course_id) VALUES (3, 3);
INSERT INTO students2courses (student_id, course_id) VALUES (4, 5);
-- Вывести имена студентов и курсы, которые они проходят
SELECT 
	t1.name,
    t3.title
FROM students t1
JOIN students2courses t2 
ON t1.id = t2.student_id
JOIN courses t3
ON t3.id = t2.course_id;
-- Вывести имена всех преподавателей с их компетенциями
SELECT 
	t1.name,
	t3.title
FROM teachers t1
JOIN teachers2competencies t2
ON t1.id = t2.teacher_id
JOIN competencies t3
ON t3.id = t2.competency_id;
-- Найти преподавателя, у которого нет компетенций
SELECT 
	t1.name
FROM teachers t1
LEFT JOIN teachers2competencies t2
ON t1.id = t2.teacher_id
WHERE t2.competency_id IS NULL;
-- Найти имена студентов, которые не проходят ни один курс
SELECT 
	Students.name
FROM students t1
LEFT JOIN students2courses t2
ON t1.id = t2.student_id
WHERE t2.course_id IS NULL;
-- Найти курсы, которые не посещает ни один студент
SELECT 
	t1.title
FROM courses t1
LEFT JOIN students2courses t2
ON t1.id = t2.course_id
WHERE t2.student_id IS NULL;
-- Найти компетенции, которых нет ни у одного преподавателя
SELECT 
	t1.title
FROM competencies t1
LEFT JOIN teachers2competencies t2
ON t1.id = t2.competency_id
WHERE t2.teacher_id IS NULL;
-- Вывести название курса и имя старосты
SELECT
	t1.title,
    t2.name
FROM courses t1
JOIN students t2
ON t1.headman_id = t2.id;
-- Вывести имя студента и имена старост, которые есть на курсах, которые он проходит
SELECT 
	t1.name AS student_name,
    t4.name AS headman_name
FROM students t1
JOIN students2courses t2
ON t1.id = t2.student_id
JOIN courses t3
ON t2.course_id = t3.id
JOIN students t4
ON t3.headman_id = t4.id;



