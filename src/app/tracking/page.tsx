"use client";

import { useState } from "react";
import MonthSelect from "../components/monthSelect/MonthSelect";
import { getTracking } from "./TrackingService";

//TODO: Remove async
const Tracking = () => {
  // const trackings = await getTracking(2023, 7);
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(1);

  const handleMonthSet = (month: number) => {
    switch (month) {
      case 13:
        setYear(year + 1);
        setMonth(1);
        break;
      case 0:
        setYear(year - 1);
        setMonth(12);
        break;
      default:
        setMonth(month);
        break;
    }
  };

  return (
    <>
      <div>
        <MonthSelect month={month} setMonth={handleMonthSet} />
        {/* {(await getCategories()).map((tableData) => {
      return (
        <></>
        // <CategoryTable key={tableData.id} tableData={tableData} />
      );
    })} */}
        {/* </div>
      <div>
        <h1>Tracking</h1>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Expected</th>
              <th>Spend</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {trackings.map((tracking) => {
              return (
                <tr key={tracking.account.id}>
                  <td>{tracking.account.name}</td>
                  <td>{tracking.expected}</td>
                  <td>{tracking.spend}</td>
                  <td>{(tracking.spend / tracking.expected) * 100}%</td>
                </tr>
              );
            })}
          </tbody>
          </table> */}
      </div>
    </>
  );
};

export default Tracking;
