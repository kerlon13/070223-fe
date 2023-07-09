-- 1
select
	t1.name,
	t1.lastname
from customers t1
left join orders t2
on t1.id = t2.customerid
where t2.id is NULL;

-- 2
select
	t1.title
from products t1
left join orders t2
on t1.id = t2.productid
where t2.id is null;

-- 3
select
	-- t1.title
    *
from products t1
left join (
	select 
		*
	from orders
	where ordertype = "direct") t2
on t1.id = t2.productid
where t2.ordertype is null;

-- 4
select
	t3.name,
    t3.lastname
from orders t1
inner join (
	select
		t1.id,
		sum(t1.productcount * t2.price) as total_price
	from orders t1
	inner join products t2
	group by t1.id
	order by total_price desc
	limit 1) as t2
on t1.id = t2.id
inner join customers t3
on t1.customerid = t3.id




