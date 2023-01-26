"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

interface datesOfYearType {
  [month: string]: string[];
}

export default function Home() {
  let [datesOfYear, setDatesOfYear] = useState<datesOfYearType>({});

  useEffect(() => {
    let now = new Date();
    let nowYear = now.getFullYear();
    let firstDayOfThisYear = new Date(nowYear, 0, 1);

    let dates: { [month: string]: string[] } = {};

    for (let i = 0; i <= 366; i++) {
      let date = new Date(new Date(firstDayOfThisYear.getTime()).setDate(+i));
      let month = date.getMonth().toString();
      let dateString = date.toLocaleDateString();
      if (!dates[month]) {
        dates[month] = [];
      }
      if (date.getFullYear() === firstDayOfThisYear.getFullYear()) {
        dates[month].push(dateString);
      }
    }

    setDatesOfYear(dates);
  }, []);

  const [tooltip, setTooltip] = useState({
    show: false,
    date: "",
  });

  const handleHover = (event: React.MouseEvent<HTMLDivElement>) => {
    let date = event.currentTarget.getAttribute("data-date") as string;
    setTooltip({ show: true, date });
  };

  const handleLeave = () => {
    setTooltip({ show: false, date: "" });
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>The Year</h2>
      <div className={styles.months}>
        {Array.from(Object.keys(datesOfYear)).map((item) => {
          return (
            <div className={styles.monthItem} key={item}>
              <span className={styles.monthName}>
                {(Number(item) + 1).toString().padStart(2, "0")}
              </span>
              <div className={styles.days} onMouseEnter={handleHover}>
                {datesOfYear[item].map((item) => {
                  return (
                    <div
                      className={styles.dateItem}
                      data-date={item}
                      key={item}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                    >
                      🔺
                      {tooltip.show && tooltip.date === item ? (
                        <div className={styles.tooltip}>{item}</div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
