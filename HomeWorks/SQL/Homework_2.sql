USE airport;
-- 1

SELECT
	id, 
    service_class,
    price,
		CASE
			WHEN price BETWEEN 10000 AND 11000 AND service_class="Economy" 
				THEN "ECONOMY"
			WHEN price BETWEEN 20000 AND 30000 AND service_class="PremiumEconomy"
				THEN "PremiumEconomy"
			WHEN price > 10000 AND service_class="Business" 
				THEN "Business"
		END as caregory
FROM tickets;

-- 2

SELECT
	side_number, 
    production_year,
		CASE
			WHEN `range` > 10000
				THEN CASE
						WHEN production_year < 2000
							THEN "OLD"
						WHEN production_year BETWEEN 2000 AND 2010
							THEN "MID"
						ELSE "NEW"
					END
		END as class
FROM airliners ORDER BY class;

-- 3

SELECT
	id, 
    trip_id,
		CASE
			WHEN trip_id = "LL4S1G8PQW" OR  trip_id = "0SE4S0HRRU" OR trip_id = "JQF04Q8I9G" 
				THEN CASE
						WHEN service_class = "Economy"
							THEN price*0.85
						WHEN service_class = "Business"
							THEN price*0.9
						WHEN service_class = "PremiumEconomy"
							THEN price*0.8
					END
		END as newprice
FROM tickets;


