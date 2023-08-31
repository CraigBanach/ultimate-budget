import { db } from "@vercel/postgres";
import { Account } from "../entries/AccountService";

export class Budget {
  year: number;
  month: number;
  account: Account;
  amount: number;

  constructor(year: number, month: number, account: Account, amount: number) {
    this.year = year;
    this.month = month;
    this.account = account;
    this.amount = amount;
  }

  static fromBudgetRow = (budgetRow: BudgetRow): Budget =>
    new Budget(
      +budgetRow.year,
      +budgetRow.month,
      {
        name: budgetRow.account_name,
        category: budgetRow.category_name,
        id: +budgetRow.account_id,
      },
      +budgetRow.amount
    );
}

interface BudgetRow {
  year: number;
  month: number;
  account_name: string;
  category_name: string;
  account_id: number;
  amount: number;
}

export const getBudgets = async (year: number): Promise<Array<Budget>> => {
  const client = await db.connect();
  const rows = (
    await client.sql<BudgetRow>`
        SELECT
          b.year as year,
          b.month as month,
          a.name as account_name,
          c.name as category_name,
          a.id as account_id,
          b.amount as amount
        FROM budgets b
        INNER JOIN accounts a
          ON b.account_id = a.id
        INNER JOIN categories c
          ON a.category_id = c.id
        WHERE year = ${year};
    `
  ).rows;

  return rows.map(Budget.fromBudgetRow);
};
