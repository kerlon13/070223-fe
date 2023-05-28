USE hr;
-- 1
SELECT 
	department_id,
	MAX(
		CASE 
			WHEN salary > 10000 
            THEN 1 
            ELSE 0
            END) AS category
FROM employees
GROUP BY
department_id
HAVING
category = 1;

-- 2
SELECT 
	department_id,
	MIN(
		CASE 
			WHEN salary > 10000 
            THEN 1 
            ELSE 0
            END) AS category
FROM employees
GROUP BY
	department_id
HAVING
category = 1;
    
-- 3
-- Операторы min и max используются для определения минимального или максималього значения в выбранном столбце.



