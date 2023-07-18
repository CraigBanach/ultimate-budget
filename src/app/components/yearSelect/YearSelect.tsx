import styles from "./YearSelect.module.css";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

interface Props {
  year: number;
  setYear: (year: number) => void;
}

const YearSelect = ({ year = 2023, setYear }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} onClick={() => setYear(year - 1)}>
        <ArrowLeft />
      </div>
      <h1>{year}</h1>
      <div className={styles.arrowContainer} onClick={() => setYear(year + 1)}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default YearSelect;
