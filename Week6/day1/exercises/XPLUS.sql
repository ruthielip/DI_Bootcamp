-- Database: bootcamp

-- DROP DATABASE bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE students(
-- 	student_id SERIAL PRIMARY KEY,
-- 	last_name VARCHAR (20) NOT NULL,
-- 	first_name VARCHAR (25) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Benichou', 'Marc', '1998-11-02'),
-- ('Cohen', 'Yoan', '2010-12-03'),
-- ('Benichou', 'Lea', '1987-07-27'),
-- ('Dux', 'Amelia', '1996-04-07'),
-- ('Grez', 'David', '2003-06-14'),
-- ('Simpson', 'Omer', '1980-10-03');

-- INSERT INTO students (last_name, first_name, birth_date)
-- VALUES ('Lipkin', 'Ruthie', '1996-06-25')

-- SELECT * FROM students;
-- SELECT first_name, last_name FROM students;
-- SELECT first_name, last_name FROM students WHERE student_id = 2;
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
-- SELECT first_name, last_name FROM students WHERE student_id IN(1,3);

-- SELECT * FROM students WHERE birth_date >= '01-01-2000'