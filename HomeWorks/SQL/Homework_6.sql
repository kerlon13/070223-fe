
-- 1
SELECT 
	name,
	lastname
FROM customers
WHERE id NOT IN (
	SELECT DISTINCT
		customerid
	FROM orders);

-- 2 
SELECT 
	title
FROM products
WHERE id NOT IN (
	SELECT DISTINCT
		productid
	FROM orders);
-- 3
SELECT
	title
FROM products
WHERE id NOT IN (
	SELECT DISTINCT
		productid
	FROM orders
		WHERE ordertype="online");
-- 4
SELECT
	name,
    lastname
FROM customers
WHERE id IN (
	SELECT
		t1.customerid
	FROM orders t1
	INNER JOIN products t2
	ON t1.productid = t2.id
		WHERE t2.price = (
			SELECT
				max(price)
		FROM products
)
);

 






