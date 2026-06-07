INSERT OR IGNORE INTO employees
VALUES 
	(1, 'Taro Yamada', 'Sales', 400000, '2020-04-01'),
	(2, 'Hanako Suzuki', 'Engineering', 550000, '2019-07-15'),
	(3, 'Ichiro Tanaka', 'HR', 380000, '2021-01-10'),
	(4, 'Misaki Sato', 'Sales', 430000, '2022-03-20'),
	(5, 'Kenta Nakamura', 'Marketing', 410000, '2020-11-05');

SELECT * FROM employees;

SELECT *
FROM employees
WHERE salary >= 400000;

SELECT name, department
FROM employees
WHERE department == 'Sales' OR department == 'HR';

SELECT *
FROM employees
WHERE name LIKE 'H%';

ALTER TABLE employees
ADD is_active BOOLEAN;

ALTER TABLE employees
ALTER COLUMN is_active TYPE BOOLEAN;

UPDATE employees
SET is_active = 1;

DELETE FROM employees
WHERE hire_date > '2022-01-01';