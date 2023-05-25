import { ChangeEvent, useEffect, useState } from "react";
import styles from "./NumberCell.module.css";

interface Props {
  value?: number;
  rowIndex: number;
  columnId: number;
  updateData: (index: number, columnId: number, value: number) => void;
}

const NumberCell = ({
  value: initialValue = 0,
  rowIndex,
  columnId,
  updateData,
}: Props) => {
  const [value, setValue] = useState(initialValue.toFixed(2));

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (typeof +value === "number") setValue(value);
  };

  const onBlur = () => {
    updateData(rowIndex, columnId, +value);
  };

  useEffect(() => {
    setValue(initialValue.toFixed(2));
  }, [initialValue]);

  return (
    <td className={styles.numberCell}>
      <input
        className={styles.numberInput}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </td>
  );
};

export default NumberCell;
