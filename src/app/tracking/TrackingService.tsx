import { db } from "@vercel/postgres";
import { Account } from "../entries/AccountService";

export interface Tracking {
  year: number;
  month: number;
  account: Account;
  expected: number;
  spend: number;
}

interface TrackingRow {
  year: number;
  month: number;
  account_name: string;
  category_name: string;
  account_id: number;
  expected: number;
  spend: number;
}

const trackingMapper = (trackingRows: Array<TrackingRow>): Array<Tracking> =>
  trackingRows.map((row) => ({
    year: row.year,
    month: row.month,
    account: {
      id: row.account_id,
      category: row.category_name,
      name: row.account_name,
    },
    expected: row.expected,
    spend: row.spend,
  }));

export const getTracking = async (
  year: number,
  month: number
): Promise<Array<Tracking>> => {
  const client = await db.connect();
  const rows = (
    await client.sql<TrackingRow>`
    SELECT 
      a.id as account_id,
      a.name as account_name,
      SUM(e.amount) as spend,
      min(c.name) as category_name,
      min(b.amount) as expected,
      min(b.year) as year,
      min(b.month) as month
    FROM accounts a
    LEFT JOIN entries e
      ON a.id = e.account_id
    INNER JOIN categories c
      ON c.id = a.category_id
    LEFT JOIN budgets b
      ON b.account_id = a.id
      AND b.year = ${year}
      AND b.month = ${month}
    GROUP BY a.id;
  `
  ).rows;
  return trackingMapper(rows);
};
