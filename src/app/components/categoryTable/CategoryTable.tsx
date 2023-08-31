"use client";

import NumberCell from "./NumberCell";
import TextCell from "./TextCell";
import styles from "./CategoryTable.module.css";
import { CategoryData } from "./CategoryData";
import { useState } from "react";

interface Props {
  category: string;
  tableData: CategoryData;
}

const CategoryTable = ({
  tableData: initialTableData,
  category,
}: Props): JSX.Element => {
  const [tableData, setTableData] = useState(initialTableData);

  const rows = [];

  for (const [account, accountEntries] of Object.entries(tableData.tableRows)) {
    rows.push(
      <tr key={account} className={styles.tableRow}>
        <TextCell value={account} />
        {accountEntries.map(({ month, amount }) => {
          return (
            <NumberCell
              key={month + 1}
              value={amount}
              rowIndex={month + 1}
              columnId={month + 2}
              updateData={() => {}}
            />
          );
        })}
      </tr>
    );
  }

  // const updateData = (rowIndex: number, columnId: number, value: any) => {
  //   setTableData((old) => ({
  //     ...old,
  //     tableRows: old.tableRows.map((row, index) => {
  //       if (index === rowIndex) {
  //         const retVal = {
  //           ...row,
  //         };
  //         retVal.values[columnId - 1] = value;
  //         return retVal;
  //       }
  //       return row;
  //     }),
  //   }));
  // };

  return (
    <table className={styles.categoryTable}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <th>{category}</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th>Total</th>
        </tr>
        {rows}
      </tbody>
    </table>
  );
};

export default CategoryTable;
