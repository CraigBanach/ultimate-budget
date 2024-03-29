"use server";

import { db } from "@vercel/postgres";
import { Account } from "./AccountService";

export interface Entry {
  id?: number;
  account: Account;
  description: string;
  amount: number;
  year: number;
  month: number;
  day: number;
}

interface EntryRow {
  id: number;
  description: string;
  amount: string;
  account_name: string;
  account_id: number;
  year: number;
  month: number;
  day: number;
}

const entryMapper = (entryRows: Array<EntryRow>): Array<Entry> =>
  entryRows.map((row) => ({
    id: row.id,
    account: {
      id: row.account_id,
      name: row.account_name,
    },
    description: row.description,
    amount: +row.amount,
    year: row.year,
    month: row.month,
    day: row.day,
  }));

export const getEntries = async (): Promise<Array<Entry>> => {
  const client = await db.connect();
  const rows = (
    await client.sql<EntryRow>`SELECT e.id, e.description, e.amount, e.year, e.month, e.day, cr.name AS account_name, cr.id AS account_id FROM entries e INNER JOIN category_rows cr ON e.account_id = cr.id;`
  ).rows;
  return entryMapper(rows);
};

export const addEntry = async (entry: Entry): Promise<boolean> => {
  "use server";
  const client = await db.connect();
  const res =
    await client.sql`INSERT INTO entries (account_id, description, amount)
    VALUES (${entry.account.id}, ${entry.description}, ${entry.amount});`;
  return res.rowCount < 0;
};
