import styles from "./TextCell.module.css";

interface Props {
  value?: string;
}

const TextCell = ({ value = "" }: Props) => {
  return (
    <td className={styles.textCell}>
      <input className={styles.textInput} type="text" value={value} />
    </td>
  );
};

export default TextCell;
