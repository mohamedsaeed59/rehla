import rightArrow from "../../assets/icons/right-arrow.svg";
import DaysGrid from "./_components/DaysGrid";
import ShiftsSidePanel from "./_components/ShiftsSidePanel";
import { data } from "./_components/SampleData";
import { useEffect, useState } from "react";

type DayState = "available" | "unavailable" | "partial";

interface DayData {
  date: number;
  state: DayState;
  isSelected: boolean;
}

interface Shift {
  id: number;
  time: string;
  price: number;
}

// This will be used for display of available shifts
const shifts: Shift[] = [
  { id: 1, time: "08:00am - 03:00pm", price: 250 },
  { id: 2, time: "03:00pm - 12:00am", price: 350 },
  { id: 3, time: "12:00am - 08:00am", price: 150 },
];

export default function Calendar() {
  const [calendarData, setCalendarData] = useState<DayData[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("October");
  const [showMonth, setShowMonth] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    // Update the calendar data based on the selected month
    const monthData = data.months.find(
      (month) => month.month === selectedMonth
    );
    if (monthData) {
      const updatedData = monthData.days.map((day) => ({
        date: new Date(day.date).getDate(),
        state: day.availability as DayState,
        isSelected: false,
      }));
      setCalendarData(updatedData);
    }
  }, [selectedMonth]);

  const handleDayClick = (index: number) => {
    setCalendarData((prevData) =>
      prevData.map((day, i) =>
        i === index
          ? { ...day, isSelected: !day.isSelected }
          : { ...day, isSelected: false }
      )
    );
    setSelectedDate(`${index + 1}/${selectedMonth}/2024`);
  };

  const handleShowMonth = () => {
    setShowMonth(!showMonth);
  };

  return (
    <div className="">
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="flex flex-col gap-5 w-full md:w-[70%]">
          <div
            className="bg-bgNew flex flex-col justify-center gap-1 
           rounded-tl-[40px] rounded-tr-[40px]
          items-center py-3"
          >
            <div className="border shadow-sm rounded-xl py-2 px-5">
              <span className="font-normal text-[17px]">2024</span>
            </div>
            <div className="relative">
              <div className="font-medium text-lg cursor-pointer text-mainBlack flex justify-center gap-1 items-center ">
              October
                <img
                onClick={handleShowMonth}
                  src={rightArrow}
                  alt="rightArrow"
                  className="w-4 h-4 rotate-[90deg] mt-2"
                />
              </div>
              {!showMonth && (
                <div className="absolute -bottom-12  left-0 font-medium text-lg cursor-pointer py-1 px-3 bg-[#ae9526] rounded-xl text-white my-2 z-40">
                  November
                </div>
              )}
            </div>
          </div>
          <DaysGrid calendarData={calendarData} onDayClick={handleDayClick} />
        </div>
        <div className="w-80">
          <ShiftsSidePanel shifts={shifts}/>
        </div>
      </div>
    </div>
  );
}
