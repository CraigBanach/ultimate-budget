"use client";

import { useMemo, useState } from "react";
import EditableTable, { Styles } from "../components/editableTable";
import makeData from "./makeData";

const TypePage = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "January",
        accessor: "1",
      },
      {
        Header: "February",
        accessor: "2",
      },
      {
        Header: "March",
        accessor: "3",
      },
      {
        Header: "April",
        accessor: "4",
      },
      {
        Header: "May",
        accessor: "5",
      },
      {
        Header: "June",
        accessor: "6",
      },
      {
        Header: "July",
        accessor: "7",
      },
      {
        Header: "August",
        accessor: "8",
      },
      {
        Header: "September",
        accessor: "9",
      },
      {
        Header: "October",
        accessor: "10",
      },
      {
        Header: "November",
        accessor: "11",
      },
      {
        Header: "December",
        accessor: "12",
      },
      {
        Header: "Total",
        accessor: "total",
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(10));
  const [originalData] = useState(data);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const updateMyData = (rowIndex: number, columnId: number, value: string) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData((old) =>
      old.map((row, index: number) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <Styles>
      <EditableTable
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </Styles>
  );
};

export default TypePage;
