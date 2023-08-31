INSERT INTO budgets (year, month, account_id, amount)
SELECT 2023 as year,
    month,
    a.id as account_id,
    123.45 as amount
FROM (
        VALUES (1),
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
    CROSS JOIN accounts a;