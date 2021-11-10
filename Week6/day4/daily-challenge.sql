-- CREATE TABLE orders (
-- 	order_id SERIAL PRIMARY KEY,
-- 	user_name VARCHAR (25),
-- 	order_date DATE 
-- )

-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR (50),
-- 	price INTEGER NOT NULL,
-- 	order_id INTEGER REFERENCES orders (order_id)
-- )

-- INSERT INTO orders (user_name, order_date)
-- VALUES ('Mike', 'now'),
--        ('Nancy', 'now'),
-- 	      ('Steve', 'now');

-- INSERT INTO items(item_name, price, order_id)
-- VALUES ('Coca Cola', 2, 1),
--        ('Comic Book', 10, 1),
-- 	      ('Bike', 70, 1),
-- 	      ('DVD', 12, 3),
-- 	      ('Sprite', 2, 3),
-- 	      ('Cherry Coke', 3, 2);

-- CREATE or REPLACE FUNCTION total_price(total INTEGER) 
-- RETURNS INTEGER AS $price_sum$
-- DECLARE 
--    price_sum INTEGER;
-- BEGIN 
--    price_sum := (SELECT SUM(price) FROM items WHERE order_id = total);
--    RETURN price_sum;
-- END;
-- $price_sum$ LANGUAGE plpgsql;

SELECT * FROM total_price(1);