import NumberCell from "./NumberCell";
import TextCell from "./TextCell";
import styles from "./CategoryTable.module.css";

const CategoryTable = () => {
  return (
    <table className={styles.categoryTable}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <th>Income</th>
          <th>Jan</th>
          <th>Feb</th>
          <th>Mar</th>
          <th>Apr</th>
          <th>May</th>
          <th>Jun</th>
          <th>Jul</th>
          <th>Aug</th>
          <th>Sep</th>
          <th>Oct</th>
          <th>Nov</th>
          <th>Dec</th>
          <th>Total</th>
        </tr>
        <tr className={styles.tableRow}>
          <TextCell value="Craig" />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={1481.4} />
        </tr>
        <tr>
          <TextCell value="Leigh-Anne" />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={123.45} />
          <NumberCell value={1481.4} />
        </tr>
        <tr className={styles.tableRow}>
          <TextCell value="Total" />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={246.9} />
          <NumberCell value={2962.8} />
        </tr>
      </tbody>
    </table>
  );
};

export default CategoryTable;
