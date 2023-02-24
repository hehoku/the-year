import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

interface DateItem {
  date: Dayjs;
  isDone: boolean;
}

export default function Today() {
  const [pass7days, setPass7days] = useState<DateItem[]>([]);
  const [currDate, setCurrDate] = useState<string>(
    dayjs().format("YYYY/MM/DD")
  );

  const dayOfWeekCSSName =
    "w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer";

  let updateDays = () => {
    let days = [];
    let now = dayjs();
    for (let i = 0; i < 7; i++) {
      let day = now.subtract(i, "day");
      days.unshift({
        date: day,
        isDone: false,
      });
    }
    console.log(days);
    setPass7days(days);
  };

  let dayOfWeekMapToAbbr = (dayOfWeek: number) => {
    switch (dayOfWeek) {
      case 0:
        return "Su";
      case 1:
        return "Mo";
      case 2:
        return "Tu";
      case 3:
        return "We";
      case 4:
        return "Th";
      case 5:
        return "Fr";
      case 6:
        return "Sa";
    }
  };

  useEffect(() => {
    updateDays();
  }, []);

  const handleClick = (item: DateItem) => {
    setCurrDate(item.date.format("YYYY/MM/DD"));
  };

  return (
    <>
      <div className="flex flex-col items-center gap-20 justify-center min-h-screen">
        <h3 className="text-gray-700 text-4xl font-bold">Today</h3>
        <div className="w-40 h-40 rounded-full bg-green-300 flex justify-center items-center text-8xl cursor-pointer">
          ✔️
        </div>
        <div className="flex flex-row justify-between gap-8">
          {pass7days &&
            pass7days.map((item) => {
              return (
                <div
                  key={item.date.format()}
                  onClick={() => handleClick(item)}
                  className={
                    item.date.format("YYYY/MM/DD") === currDate
                      ? dayOfWeekCSSName + " bg-green-400"
                      : dayOfWeekCSSName
                  }
                >
                  {dayOfWeekMapToAbbr(item.date.day())}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
