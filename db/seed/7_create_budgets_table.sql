CREATE TABLE budgets (
    year int NOT NULL,
    month int NOT NULL,
    account_id int NOT NULL,
    amount numeric(12, 2) NOT NULL DEFAULT 0,
    PRIMARY KEY(year, month, account_id),
    CONSTRAINT fk_account FOREIGN KEY(account_id) REFERENCES accounts(id)
);