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
-- UPDATE film SET language_id = 7 WHERE film_id = 2;

-- 3. 
-- It was easy, only one step.

-- 4.
-- SELECT COUNT(*) FROM rental WHERE return_date is NULL;

-- 5.
-- SELECT * FROM film 
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON rental.inventory_id = inventory.inventory_id
--WHERE rental_date IS NOT NULL AND return_date IS NULL
--ORDER BY rental_rate DESC LIMIT(30);

-- 6.

-- 1.
-- SELECT title FROM film 
-- JOIN film_actor ON film_actor.film_id = film.film_id
-- JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE first_name = 'Penelope' AND last_name = 'Monroe' AND description ILIKE '%sumo%' ;

-- 2.
-- SELECT title FROM film WHERE description ILIKE '%documentary%' AND rating = 'R' AND length < 60;

-- 3.
-- SELECT title FROM film 
-- JOIN inventory ON film.film_id = inventory.inventory_id 
-- JOIN rental ON inventory.inventory_id = rental.inventory_id 
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE rental_rate > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01' AND first_name = 'Matthew' AND last_name = 'Mahan';

-- 4.
-- SELECT title FROM film 
-- JOIN inventory ON film.film_id = inventory.inventory_id 
-- JOIN rental ON inventory.inventory_id = rental.inventory_id 
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND description ILIKE '%boat%' OR title ILIKE '%boat';