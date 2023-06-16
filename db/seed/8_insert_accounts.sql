INSERT INTO accounts (category_id, name)
SELECT id,
    'Craig'
FROM categories
WHERE name = 'Income'
UNION ALL
SELECT id,
    'Leigh-Anne'
FROM categories
WHERE name = 'Income'
UNION ALL
SELECT id,
    'Mortgage'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Utilities'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Groceries'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Transportation'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Insurance'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Housing'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Accountancy Fees'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Liabilities'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Taxes'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Services'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Household Supplies'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Health'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Craig Fun'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Leigh-Anne Fun'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Business Expenses'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Amsterdam'
FROM categories
WHERE name = 'Expenses'
UNION ALL
SELECT id,
    'Emergency Fund'
FROM categories
WHERE name = 'Savings'
UNION ALL
SELECT id,
    'Craig ISA'
FROM categories
WHERE name = 'Savings';