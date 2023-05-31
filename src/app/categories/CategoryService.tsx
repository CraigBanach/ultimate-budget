import { CategoryData } from "../components/categoryTable/CategoryData";
import { database } from "../utils/database";
var types = require("pg").types;

interface CategoryDataRowRecord {
  category_name: string;
  row_name: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
  total: number;
}

interface ReturnValue {
  getCategoryData: () => Promise<Array<CategoryData>>;
}

export const CategoryService = (): ReturnValue => {
  const rowMapper = (rowRecord: CategoryDataRowRecord) => ({
    name: rowRecord.row_name,
    values: [
      +rowRecord.jan,
      +rowRecord.feb,
      +rowRecord.mar,
      +rowRecord.apr,
      +rowRecord.may,
      +rowRecord.jun,
      +rowRecord.jul,
      +rowRecord.aug,
      +rowRecord.sep,
      +rowRecord.oct,
      +rowRecord.nov,
      +rowRecord.dec,
      +rowRecord.total,
    ],
  });

  const getCategoryData = async (): Promise<Array<CategoryData>> => {
    const db = await database;

    types.setTypeParser(types.NUMERIC, (value: string) => parseFloat(value));

    const categoryData =
      await db.sql<CategoryDataRowRecord>`SELECT c.name AS category_name,
    cr.name as row_name,
    cr.jan,
    cr.feb,
    cr.mar,
    cr.apr,
    cr.may,
    cr.jun,
    cr.jul,
    cr.aug,
    cr.sep,
    cr.oct,
    cr.nov,
    cr.dec,
    cr.total
    FROM category_rows_view cr
    INNER JOIN categories c ON cr.category_id = c.id
    UNION
    SELECT c.name AS category_name,
    'Total' as row_name,
    SUM(cr.jan) AS jan,
    SUM(cr.feb) AS feb,
    SUM(cr.mar) AS mar,
    SUM(cr.apr) AS apr,
    SUM(cr.may) AS may,
    SUM(cr.jun) AS jun,
    SUM(cr.jul) AS jul,
    SUM(cr.aug) AS aug,
    SUM(cr.sep) AS sep,
    SUM(cr.oct) AS oct,
    SUM(cr.nov) AS nov,
    SUM(cr.dec) AS dec,
    SUM(cr.total) AS total
    FROM category_rows_view cr
    INNER JOIN categories c ON cr.category_id = c.id
    GROUP BY c.id;`;

    const incomeData = {
      tableCategory: "Income",
      rows: categoryData.rows
        .filter((cd) => cd.category_name === "Income")
        .map(rowMapper)
        .sort((r1) => (r1.name === "Total" ? 0 : -1)),
    };

    const expenseData = {
      tableCategory: "Expenses",
      rows: categoryData.rows
        .filter((cd) => cd.category_name === "Expenses")
        .map(rowMapper)
        .sort((r1) => (r1.name === "Total" ? 0 : -1)),
    };

    const savingData = {
      tableCategory: "Savings",
      rows: categoryData.rows
        .filter((cd) => cd.category_name === "Savings")
        .map(rowMapper)
        .sort((r1) => (r1.name === "Total" ? 0 : -1)),
    };

    return [incomeData, expenseData, savingData];
  };

  return { getCategoryData };
};
