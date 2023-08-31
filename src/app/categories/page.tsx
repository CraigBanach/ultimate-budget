"use client";

import { useState } from "react";
import YearSelect from "../components/yearSelect/YearSelect";
import styles from "./page.module.css";
import useSWR from "swr";
import { Budget } from "../budget/BudgetService";
import { CategoryData } from "../../app/components/categoryTable/CategoryData";
import CategoryTable from "../components/categoryTable/CategoryTable";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Categories = () => {
  const [year, setYear] = useState(2023);
  const { data, error, isLoading } = useSWR(`/budget/${year}`, fetcher);

  const categories: Record<string, CategoryData> = {};
  const tables = [];

  if (data) {
    data.forEach((budget: Budget) => {
      const category = budget.account.category!;
      const account = budget.account.name!;
      if (!(category in categories)) categories[category] = { tableRows: {} };
      if (!(account in categories[category].tableRows))
        categories[category].tableRows[account] = [];

      categories[category].tableRows[account].push({
        month: budget.month,
        amount: budget.amount,
      });
    });

    for (const [category, categoryData] of Object.entries(categories)) {
      for (const [_, accountEntries] of Object.entries(
        categoryData.tableRows
      )) {
        accountEntries.sort((a, b) => a.month - b.month);
        accountEntries.push({
          month: 13,
          amount: accountEntries.reduce(
            (partialSum, a) => partialSum + a.amount,
            0
          ),
        });
      }

      tables.push(
        <CategoryTable
          key={category}
          tableData={categoryData}
          category={category}
        />
      );
    }
  }

  return (
    <div className={styles.categoryContainer}>
      <YearSelect year={year} setYear={setYear} />
      {categories && tables}
    </div>
  );
};

export default Categories;
