CREATE TABLE entries (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    account_id int NOT NULL,
    description varchar NOT NULL,
    amount numeric(12, 2) NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    CONSTRAINT fk_accounts FOREIGN KEY(account_id) REFERENCES category_rows(id)
);