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
-- SELECT first_name, last_name, salary FROM employees WHERE salary >= 10000 AND salary <= 15000;

-- 2.
-- SELECT first_name, last_name, hire_date FROM employees WHERE EXTRACT(YEAR FROM hire_date) = 1987;

-- 3.
-- SELECT first_name, last_name FROM employees WHERE first_name ILIKE '%c%' AND first_name ILIKE '%e%';

-- 4.
-- SELECT last_name, job_title, salary FROM employees 
-- JOIN jobs ON jobs.job_id = employees.job_id 
-- WHERE job_title NOT IN('Programmer','Shipping Clerk')
-- AND salary NOT IN (4500, 10000, 15000);

-- 5.
-- SELECT last_name FROM employees WHERE LENGTH(last_name) = 6;

-- 6.
-- SELECT last_name FROM employees WHERE POSITION('e' in last_name) = 3;

-- 7. I don't understand what to do here
-- SELECT DISTINCT job_title FROM employees JOIN jobs ON jobs.job_id = employees.job_id;

-- 8.
-- SELECT * FROM employees WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford')
