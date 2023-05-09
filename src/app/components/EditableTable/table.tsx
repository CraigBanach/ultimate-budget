import { useCallback, useMemo } from "react";
import {
  useTable,
  useBlockLayout,
  useResizeColumns,
  useSortBy,
  Column,
} from "react-table";
import Cell from "./cells/Cell";
import { FixedSizeList } from "react-window";
import Header from "./header/Header";
import scrollbarWidth from "./scrollbarWidth";
import PlusIcon from "./img/Plus";

const defaultColumn = {
  minWidth: 50,
  width: 150,
  maxWidth: 400,
  Cell: Cell,
  Header: Header,
  sortType: "alphanumericFalsyLast",
};

interface Props {
  columns: Column<object>;
}

const Table = () => {
  const columns: Array<Column> = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
    ],
    []
  );
  const data = useMemo(
    () => [
      { firstName: "Bob", lastName: "Marley" },
      { firstName: "Craig", lastName: "Banach" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    totalColumnsWidth,
  } = useTable(
    {
      columns,
      data,
    },
    useBlockLayout,
    useResizeColumns,
    useSortBy
  );

  const RenderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div {...row.getRowProps({ style })} className="tr">
          {row.cells.map((cell) => (
            // eslint-disable-next-line react/jsx-key
            <div {...cell.getCellProps()} className="td">
              {cell.render("Cell")}
            </div>
          ))}
        </div>
      );
    },
    [prepareRow, rows]
  );

  return (
    <>
      <div {...getTableProps()}>
        <div>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => column.render("Header"))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()}>
          <FixedSizeList
            height={480}
            itemCount={rows.length}
            itemSize={40}
            width={totalColumnsWidth + scrollbarWidth()}
          >
            {RenderRow}
          </FixedSizeList>
          <div className="tr add-row">
            <span className="svg-icon svg-gray icon-margin">
              <PlusIcon />
            </span>
            New
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
