USE hr;
-- 1
SELECT
	department_id,
	department_name
FROM departments
WHERE 
	manager_id IS null;

-- 2

SELECT
	t2.department_name
FROM employees t1
INNER JOIN departments t2
ON t1.department_id = t2.department_id
WHERE t1.salary > 10000;

-- 3

SELECT 
	t1.first_name,
    t1.last_name,
    t2.department_name,
    t3.job_title
FROM employees t1
INNER JOIN departments t2
ON t1.department_id = t2.department_id
INNER JOIN jobs t3
ON t1.job_id = t3.job_id;

-- 4

SELECT 
	t1.first_name,
    t1.last_name,
    t1.salary
FROM employees t1
INNER JOIN departments t2
ON t1.department_id = t2.department_id
INNER JOIN locations t3
ON t2.location_id = t3.location_id
WHERE t3.city IN ("Oxford", "San Francisco");

-- Используем БД Shop:

USE shop;

--  1

SELECT
	t1.cname,
	t2.ORDER_ID
FROM customers t1
LEFT JOIN orders t2 
ON t1.CUST_ID = t2.CUST_ID

UNION

SELECT
	t1.cname,
	t2.ORDER_ID
FROM customers t1
RIGHT JOIN orders t2 
ON t1.CUST_ID = t2.CUST_ID;

-- 2

SELECT
	t1.SNAME,
	(t2.COMM - t1.COMM) AS difference
FROM sellers t1
LEFT JOIN sellers t2
ON t1.BOSS_ID = t2.SELL_ID;

-- 3 

SELECT
	t3.SNAME,
    t1.CNAME,
    t1.CITY
FROM customers t1
INNER JOIN orders t2
ON t1.CUST_ID = t2.CUST_ID
INNER JOIN sellers t3
ON t2.SELL_ID = t3.SELL_ID
WHERE t1.CITY = t3.CITY;


