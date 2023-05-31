import CategoryTable from "../components/categoryTable/CategoryTable";
import YearSelect from "../components/yearSelect/YearSelect";
import { CategoryService } from "./CategoryService";
import styles from "./page.module.css";

const Categories = async () => {
  const { getCategoryData } = CategoryService();

  return (
    <div className={styles.categoryContainer}>
      <YearSelect />
      {(await getCategoryData()).map((tableData) => {
        return (
          <CategoryTable key={tableData.tableCategory} tableData={tableData} />
        );
      })}
    </div>
  );
};

export default Categories;
