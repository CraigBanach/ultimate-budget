import styles from "./MonthSelect.module.css";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

interface Props {
  month: number;
  setMonth: (month: number) => void;
}

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const YearSelect = ({ month = 1, setMonth }: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => setMonth(month - 1)}
      >
        <ArrowLeft />
      </div>
      <h1>{months[month - 1]}</h1>
      <div
        className={styles.arrowContainer}
        onClick={() => setMonth(month + 1)}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default YearSelect;
