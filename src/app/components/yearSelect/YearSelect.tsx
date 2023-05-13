"use client";

import styles from "./YearSelect.module.css";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

const YearSelect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <ArrowLeft />
      </div>
      <h1>2023</h1>
      <div className={styles.arrowContainer}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default YearSelect;
