"use client";

import NumberCell from "./NumberCell";
import TextCell from "./TextCell";
import styles from "./CategoryTable.module.css";
import { CategoryData } from "./CategoryData";
import { useState } from "react";

interface Props {
  tableData: CategoryData;
}

const CategoryTable = ({ tableData: initialTableData }: Props): JSX.Element => {
  const [tableData, setTableData] = useState(initialTableData);

  const updateData = (rowIndex: number, columnId: number, value: any) => {
    setTableData((old) => ({
      ...old,
      rows: old.rows.map((row, index) => {
        if (index === rowIndex) {
          const retVal = {
            ...row,
          };
          retVal.values[columnId - 1] = value;
          return retVal;
        }
        return row;
      }),
    }));
  };

  return (
    <table className={styles.categoryTable}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <th>{tableData.tableCategory}</th>
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
        {tableData.rows.map(
          (row: { name: string | undefined; values: any[] }, rowIndex) => {
            return (
              <tr key={row.name} className={styles.tableRow}>
                <TextCell value={row.name} />
                {row.values.map((cellValue, index) => {
                  return (
                    <NumberCell
                      key={index + 1}
                      value={cellValue}
                      rowIndex={rowIndex}
                      columnId={index + 1}
                      updateData={updateData}
                    />
                  );
                })}
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default CategoryTable;
