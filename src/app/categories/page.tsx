import CategoryTable from "../components/categoryTable/CategoryTable";
import YearSelect from "../components/yearSelect/YearSelect";
import { getCategories } from "./CategoryService";
import styles from "./page.module.css";

const Categories = async () => {
  return (
    <div className={styles.categoryContainer}>
      <YearSelect />
      {(await getCategories()).map((tableData) => {
        return (
          <></>
          // <CategoryTable key={tableData.id} tableData={tableData} />
        );
      })}
    </div>
  );
};

export default Categories;
