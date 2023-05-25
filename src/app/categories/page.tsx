import { table } from "console";
import CategoryTable from "../components/categoryTable/CategoryTable";
import YearSelect from "../components/yearSelect/YearSelect";
import { useCategoryService } from "./CategoryService";
import styles from "./page.module.css";

const Categories = () => {
  const { getCategoryData } = useCategoryService();

  return (
    <div className={styles.categoryContainer}>
      <YearSelect />
      {getCategoryData().map((tableData, index) => {
        return (
          <CategoryTable key={tableData.tableCategory} tableData={tableData} />
        );
      })}
    </div>
  );
};

export default Categories;
