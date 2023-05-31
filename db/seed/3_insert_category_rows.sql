INSERT INTO category_rows (
        category_id,
        name,
        jan,
        feb,
        mar,
        apr,
        may,
        jun,
        jul,
        aug,
        sep,
        oct,
        nov,
        dec
    )
SELECT id,
    'Craig',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Income'
UNION ALL
SELECT id,
    'Leigh-Anne',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Income'
UNION ALL
SELECT id,
    'Mortgage',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Utilities',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Groceries',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Transportation',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Insurance',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Housing',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Accountancy Fees',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Liabilities',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Taxes',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Services',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Household Supplies',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Health',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Craig Fun',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Leigh-Anne Fun',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Business Expenses',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Amsterdam',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Emergency Fund',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Savings'
UNION ALL
SELECT id,
    'Craig ISA',
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45,
    123.45
FROM categories
WHERE name = 'Savings';