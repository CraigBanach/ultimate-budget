import React, { useState, useRef } from "react";
import "./EditableDataTable2.css";

interface Row {
  id: number;
  name: string;
  age: number;
}

const initialRows: Row[] = [
  { id: 1, name: "John Smith", age: 35 },
  { id: 2, name: "Jane Doe", age: 42 },
  { id: 3, name: "Bob Johnson", age: 28 },
];

const EditableDataTable2 = () => {
  const [rows, setRows] = useState(initialRows);
  const [editingRowId, setEditingRowId] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Add this line

  const handleSave = () => {
    setEditingRowId(null);
  };

  const handleCancel = () => {
    setEditingRowId(null);
  };

  const handleDelete = (id: number) => {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
    field: keyof Row
  ) => {
    const newValue = event.target.value;
    const newRows = rows.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          [field]: field === "age" ? parseInt(newValue, 10) : newValue,
        };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td
              onClick={() => {
                setEditingRowId(row.id);
                inputRef.current?.focus(); // Add this line
              }}
              className={editingRowId === row.id ? "editing" : ""}
            >
              {editingRowId === row.id ? (
                <input
                  type="text"
                  value={row.name}
                  ref={inputRef} // Add this line
                  onChange={(event) => handleInputChange(event, row.id, "name")}
                />
              ) : (
                row.name
              )}
            </td>
            <td
              onClick={() => {
                setEditingRowId(row.id);
                inputRef.current?.focus(); // Add this line
              }}
              className={editingRowId === row.id ? "editing" : ""}
            >
              {editingRowId === row.id ? (
                <input
                  type="number"
                  value={row.age}
                  ref={inputRef} // Add this line
                  onChange={(event) => handleInputChange(event, row.id, "age")}
                />
              ) : (
                row.age
              )}
            </td>
            <td>
              {editingRowId === row.id && (
                <>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              )}
              <button onClick={() => handleDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditableDataTable2;
