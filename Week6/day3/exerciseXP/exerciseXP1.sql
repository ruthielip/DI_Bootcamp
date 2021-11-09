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

-- SELECT language.name FROM language JOIN film ON language.language_id = film.film_id;

-- SELECT title, description, name FROM film FULL OUTER JOIN language ON film.film_id = language.language_id;
-- SELECT title, description, name FROM film LEFT JOIN language ON film.film_id = language.language_id;

-- CREATE TABLE new_film (
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(50) NOT NULL
-- )

-- INSERT INTO new_film (title)
-- VALUES ('Parasite'),
--        ('The French Dispatch'),
-- 	      ('The Guilty');

-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY,
-- 	film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language (language_id),
-- 	title VARCHAR(25),
-- 	score INTEGER, 
-- 	review_text TEXT,
-- 	last_update TIMESTAMP
-- )

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES ((SELECT new_film_id FROM new_film WHERE title = 'Parasite'), (SELECT language_id FROM language WHERE name = 'Korean'), 'Spectacular', 10, 'Great movie, highly recommended', 'now'),
--        ((SELECT new_film_id FROM new_film WHERE title = 'The French Dispatch'), (SELECT language_id FROM language WHERE name = 'English'), 'Newest Wes Anderson Movie', 9, 'Havent seen it but Im sure its good', 'now');

-- SELECT * FROM customer_review;

-- SELECT new_film.title, language.name, customer_review.score, customer_review.review_text FROM customer_review 
-- JOIN new_film ON new_film.new_film_id = customer_review.new_film_id
-- JOIN language ON language.language_id = customer_review.language_id;

-- DELETE FROM new_film WHERE new_film_id = 2;
-- SELECT * FROM customer_review;
