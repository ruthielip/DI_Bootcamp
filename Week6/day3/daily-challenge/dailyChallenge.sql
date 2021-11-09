-- Database: dailychallenge

-- DROP DATABASE dailychallenge;

-- CREATE DATABASE dailychallenge
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.
-- CREATE TABLE customer (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	firstname VARCHAR(25),
-- 	lastname VARCHAR (25)
-- )

-- CREATE TABLE customer_profile(
-- 	customer_id INTEGER UNIQUE REFERENCES customer (customer_id),
-- 	username VARCHAR (50),
-- 	email VARCHAR (50)
-- )

-- INSERT INTO customer (firstname, lastname)
-- VALUES ('Julian', 'Rivers');

-- INSERT INTO customer_profile (customer_id, username, email)
-- VALUES ((SELECT customer_id FROM customer WHERE customer_id = 1), 'julesRivers', 'julianr@aol.com');

-- INSERT INTO customer (firstname, lastname)
-- VALUES ('Lizzy', 'Caldwell');

-- SELECT * FROM customer INNER JOIN customer_profile ON customer.customer_id = customer_profile.customer_id;
-- SELECT * FROM customer RIGHT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id;
-- SELECT * FROM customer LEFT JOIN customer_profile ON customer.customer_id = customer_profile.customer_id;
-- SELECT * FROM customer FULL JOIN customer_profile ON customer.customer_id = customer_profile.customer_id;

-- 2.
-- CREATE TABLE product(
-- 	product_id SERIAL PRIMARY KEY,
-- 	product_name VARCHAR (50),
-- 	price INTEGER
-- )

-- CREATE TABLE orders (
-- 	product_id INTEGER REFERENCES product (product_id) ON DELETE CASCADE,
-- 	customer_id INTEGER REFERENCES customer (customer_id) ON DELETE CASCADE
-- )

-- INSERT INTO product (product_name, price)
-- VALUES ('Milk', 2),
--        ('Olive oil', 10);

-- INSERT INTO orders (product_id, customer_id) 
-- VALUES ((SELECT product_id FROM product WHERE product_name = 'Milk'), (SELECT customer_id FROM customer WHERE firstname = 'Julian'))

-- SELECT * FROM orders 
-- INNER JOIN customer ON customer.customer_id = orders.customer_id 
-- INNER JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders 
-- FULL JOIN customer ON customer.customer_id = orders.customer_id 
-- FULL JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders 
-- LEFT JOIN customer ON customer.customer_id = orders.customer_id 
-- LEFT JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders 
-- RIGHT JOIN customer ON customer.customer_id = orders.customer_id 
-- LEFT JOIN product ON product.product_id = orders.product_id;

-- SELECT * FROM orders 
-- RIGHT JOIN customer ON customer.customer_id = orders.customer_id 
-- RIGHT JOIN product ON product.product_id = orders.product_id;