"use client";

import { useState } from "react";
import useSWR from "swr";
import { Tracking } from "./TrackingService";
import MonthSelect from "../components/monthSelect/MonthSelect";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const Tracking = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { data, error, isLoading } = useSWR(
    `/tracking/${year}/${month}`,
    fetcher
  );

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
      </div>
      {data && (
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
              {(data as Array<Tracking>).map((tracking) => {
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
          </table>
        </div>
      )}
    </>
  );
};

export default Tracking;
