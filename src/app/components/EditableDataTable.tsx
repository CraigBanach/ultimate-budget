"use client";

import React, { useState } from "react";
import "./EditableDataTable.css"; // Import CSS file

type DataRow = string[];

interface EditableDataTableProps {
  data: DataRow[];
}

const EditableDataTable: React.FC<EditableDataTableProps> = ({ data }) => {
  const [tableData, setTableData] = useState<DataRow[]>(data);

  const handleCellChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number,
    columnIndex: number
  ) => {
    const newData = [...tableData];
    newData[rowIndex][columnIndex] = event.target.value;
    setTableData(newData);
  };

  const handleAddRow = () => {
    const newRow = new Array(tableData[0].length).fill("");
    setTableData([...tableData, newRow]);
  };

  const handleDeleteRow = (rowIndex: number) => {
    const newData = tableData.filter((_, index) => index !== rowIndex);
    setTableData(newData);
  };

  return (
    <div className="editable-table">
      <table>
        <thead>
          <tr>
            {tableData[0].map((_, index) => (
              <th key={index}>Column {index + 1}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(event) =>
                      handleCellChange(event, rowIndex, columnIndex)
                    }
                  />
                </td>
              ))}
              <td>
                <button onClick={() => handleDeleteRow(rowIndex)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};

export default EditableDataTable;
