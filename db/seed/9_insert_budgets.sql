INSERT INTO budgets (year, month, account_id, amount)
SELECT 2023,
    month,
    id,
    123.45
FROM (
        VALUES 
                (1),
                (2),
                (3),
                (4),
                (5),
                (6),
                (7),
                (8),
                (9),
                (10),
                (11),
                (12)
            
    ) AS months(month)
    CROSS JOIN accounts;