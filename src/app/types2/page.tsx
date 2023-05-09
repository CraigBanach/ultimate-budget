"use client";
import "./page.css";

import dynamic from "next/dynamic";
const MyTable = dynamic(() => import("../components/EditableDataTable2"), {
  ssr: false,
});

function Page() {
  return (
    <div className="page-container">
      <div className="table-container">
        <MyTable />
      </div>
    </div>
  );
}

export default Page;
