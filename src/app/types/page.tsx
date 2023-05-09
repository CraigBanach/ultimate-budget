"use client";

import EditableDataTable from "../components/EditableDataTable";

const data = [
  ["John", "Doe", "john@example.com", "123 Main St"],
  ["Jane", "Doe", "jane@example.com", "456 Park Ave"],
  ["Bob", "Smith", "bob@example.com", "789 Broadway"],
];

const Types = () => {
  return (
    <div>
      <EditableDataTable data={data} />
    </div>
  );
};
export default Types;
