import styles from "./NumberCell.module.css";

interface Props {
  value?: number;
}

const NumberCell = ({ value = 0 }: Props) => {
  return (
    <td className={styles.numberCell}>
      <input
        className={styles.numberInput}
        type="text"
        value={value.toFixed(2)}
      />
    </td>
  );
};

export default NumberCell;
