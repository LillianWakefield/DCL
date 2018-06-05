

/*insert into restaurants (name, distance, stars, category, doestakeout, last_time_you_ate_there)
VALUES
('BBQplace', 23, 4, 'BBQ', TRUE, '2018-1-1'),
('Chinese food place', 2, 5, 'Chinese', TRUE, '2018-2-1'),
('Pizza place', 3, 3, 'Pizza', TRUE, '2018-2-1'),
('Salads', 20, 5, 'Salads', False, '2018-4-1'),
('Other BBQ place', 5, 2, 'BBQ', False, '2018-5-1'),
('Health food place', 7, 1, 'Salads', False, '2018-6-1');

SELECT * from restaurants
WHERE stars = 5;

SELECT doestakeout from restaurants
WHERE stars = 5;

SELECT userid from restaurants
WHERE name = 'Salads';
SELECT * from restaurants
WHERE category ='BBQ';

SELECT * from restaurants
WHERE doestakeout = TRUE;
SELECT * from restaurants
WHERE doestakeout = TRUE AND 
category='BBQ';
SELECT * from restaurants
WHERE distance<3;
SELECT * from restaurants
WHERE last_time_you_ate_there < '2018-5-25';
SELECT * from restaurants
WHERE last_time_you_ate_there < '2018-5-25'
AND stars=5;

SELECT * FROM restaurants
ORDER BY distance;
SELECT *
FROM restaurants
ORDER BY distance ASC
LIMIT 2;
SELECT * FROM restaurants
ORDER BY stars DESC
LIMIT 2;
SELECT count(*) from restaurants;
SELECT count(category) from restaurants
SELECT AVG(stars) FROM restaurants;
SELECT MAX(stars) FROM restaurants*/