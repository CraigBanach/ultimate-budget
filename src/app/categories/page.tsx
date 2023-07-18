"use client";

import { useState } from "react";
import YearSelect from "../components/yearSelect/YearSelect";
import styles from "./page.module.css";

const Categories = () => {
  const [year, setYear] = useState(2023);
  console.log(year);

  return (
    <div className={styles.categoryContainer}>
      <YearSelect year={year} setYear={setYear} />
      {/* {(await getCategories()).map((tableData) => {
        return (
          <></>
          // <CategoryTable key={tableData.id} tableData={tableData} />
        );
      })} */}
    </div>
  );
};

export default Categories;
