-- Database: public

-- DROP DATABASE public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE items(
--    item_id SERIAL PRIMARY KEY,
--    item_name VARCHAR (20) NOT NULL, 
--    price DECIMAL NOT NULL
-- )

-- CREATE TABLE customers(
--    item_id SERIAL PRIMARY KEY,
--    first_name VARCHAR (20) NOT NULL, 
--    last_name VARCHAR (25) NOT NULL
-- )

-- INSERT INTO items (item_name, price)
-- VALUES ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80);

-- INSERT INTO customers (first_name, last_name)
-- VALUES ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- SELECT * FROM items;

-- SELECT * FROM items WHERE price > 80;

-- SELECT * FROM items WHERE price <= 300;

-- SELECT * FROM customers WHERE last_name = 'Smith'; 
-- Outcome will be the table without any customers.

-- SELECT * FROM customers WHERE last_name = 'Jones'; 

-- SELECT * FROM customers WHERE NOT first_name = 'Scott';