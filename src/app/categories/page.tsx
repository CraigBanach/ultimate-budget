import CategoryTable from "../components/categoryTable/CategoryTable";
import YearSelect from "../components/yearSelect/YearSelect";
import styles from "./page.module.css";

const Categories = () => {
  return (
    <div className={styles.categoryContainer}>
      <YearSelect />
      <CategoryTable />
    </div>
  );
};

export default Categories;
