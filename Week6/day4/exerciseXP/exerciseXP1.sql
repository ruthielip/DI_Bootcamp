-- Database: hr.backup

-- DROP DATABASE "hr.backup";

-- CREATE DATABASE "hr.backup"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.
-- SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees;

-- 2. 
-- SELECT DISTINCT department_id FROM employees;

-- 3.
-- SELECT * FROM employees ORDER BY first_name DESC;

-- 4.
-- SELECT first_name, last_name, salary, salary*0.15 AS "PF" FROM employees;

-- 5.
-- SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary ASC;

-- 6.
-- SELECT SUM(salary) FROM employees;

-- 7.
-- SELECT MAX(salary) AS "Maximum Salary", MIN(salary) AS "Minimum Salary" FROM employees;

-- 8.
-- SELECT AVG(salary) FROM employees;

-- 9.
-- SELECT COUNT(employee_id) FROM employees;

-- 10.
-- SELECT UPPER(first_name) FROM employees;

-- 11.
-- SELECT LEFT(first_name, 3) FROM employees;

-- 12.
-- SELECT first_name || ' ' || last_name AS "Full Name" FROM employees;

-- 13.
-- SELECT first_name, last_name, LENGTH(first_name || last_name) AS "Full Name Length" FROM employees;

-- 14.
-- SELECT * FROM employees WHERE first_name ~ '^[0-9]';

-- 15.
-- SELECT * FROM employees LIMIT 10;