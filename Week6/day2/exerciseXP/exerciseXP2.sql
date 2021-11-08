-- Database: dvdrental

-- DROP DATABASE dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'Hebrew_Israel.1255'
--     LC_CTYPE = 'Hebrew_Israel.1255'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1.
-- SELECT * FROM customer;

-- 2.
-- SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3.
-- SELECT DISTINCT create_date FROM customer;

-- 4.
-- SELECT * FROM customer ORDER BY first_name DESC;

-- 5.
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- 6.
-- SELECT address, phone FROM address WHERE district = 'Texas';

-- 7.
-- SELECT * FROM film WHERE film_id IN (15, 150);

-- 8.
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'The Lighthouse'; 

-- 9.
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'th%';

-- 10.
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

-- 11.
-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10;

-- 12.
-- SELECT amount, payment_date FROM payment JOIN customer ON payment.customer_id = customer.customer_id;

-- 13.
-- SELECT * FROM film WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- 14.
-- SELECT city, country FROM city JOIN country ON city.country_id = country.country_id;



