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

-- SELECT * FROM items;

-- 1.

-- SELECT * FROM items ORDER BY price ASC;
-- SELECT * FROM items WHERE price > 80 ORDER BY price DESC;
-- SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;
-- SELECT last_name FROM customers ORDER BY last_name DESC;

-- 2.

-- CREATE TABLE purchases(
-- 	customer_id INTEGER REFERENCES customers (item_id),
-- 	item_id INTEGER REFERENCES items (item_id)
-- )

-- INSERT INTO purchases (customer_id)
-- VALUES (1);

-- It works because it wasn't set to NOT NULL.

-- SELECT * FROM purchases;

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES (1, 1),
-- (2, 1),
-- (2, 3),
-- (4, 2),
-- (5, 2);

-- 3.

-- SELECT * FROM purchases; seems unhelpful.
-- SELECT * FROM purchases JOIN customers ON purchases.customer_id = customers.item_id;
-- SELECT * FROM purchases WHERE customer_id = 4;
-- SELECT * FROM purchases JOIN items ON purchases.item_id = items.item_id WHERE item_name = 'Small Desk' OR item_name = 'Large desk';

-- 4.

-- INSERT INTO items(item_name, price)
-- VALUES ('Hard Drive', 70);

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES ((SELECT item_id FROM customers WHERE first_name ='Scott'), 4)

-- 5.

-- SELECT first_name, last_name, item_name FROM purchases
-- JOIN customers ON purchases.customer_id = customers.item_id
-- JOIN items ON purchases.item_id = items.item_id;
