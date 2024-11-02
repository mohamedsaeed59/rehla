import { useParams } from "react-router-dom";
import { addShifts } from "../../app/chalet/chaletSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import rightArrow from "../../assets/icons/right-arrow.svg";
import DaysGrid from "./_components/DaysGrid";
import ShiftsSidePanel from "./_components/ShiftsSidePanel";
import { useEffect, useState } from "react";

type DayState = "available" | "not_available" | "crowded";

interface DayData {
  date: number;
  state: DayState;
  isSelected: boolean;
}

export default function Calendar({ calendar = [] }: any) {  
  const dispatch = useAppDispatch();
  const [calendarData, setCalendarData] = useState<DayData[]>([]);
  const [monthNames, setMonthNames] = useState<any[]>([]);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedDaysWithoutShifts, setSelectedDaysWithoutShifts] = useState<DayData[]>([]);
  const { shifts, chaletDetails } = useAppSelector((state: any) => state.chalet);
  const { id } = useParams();
console.log('selectedDaysWithoutShifts', selectedDaysWithoutShifts);

  useEffect(() => {
    if (chaletDetails?.have_shifts) {
      dispatch(addShifts({ id, selectedDate }));
    }
  }, [dispatch, selectedDate, id]);

  useEffect(() => {
    if (calendar.length > 0) {
      const uniqueMonths = Array.from(
        new Set(
          calendar.map((day: any) =>
            new Date(day.date).toLocaleString('default', { month: 'long', year: 'numeric' })
          )
        )
      );
      setMonthNames(uniqueMonths);
      setSelectedMonthIndex(0);
      generateCalendarDays(0, uniqueMonths);
    }
  }, [calendar]);

  const generateCalendarDays = (monthIndex: number, months: any[]) => {
    if (months.length === 0) return;

    const [monthName, year] = months[monthIndex].split(" ");
    const monthNumber = new Date(`${monthName} 1, ${year}`).getMonth();
    const monthStart = new Date(Number(year), monthNumber, 1);
    const monthEnd = new Date(Number(year), monthNumber + 1, 0);
    const daysInMonth = monthEnd.getDate();

    const updatedData = Array.from({ length: daysInMonth }, (_, i) => {
      const date = i + 1;
      const dayData = calendar.find(
        (day: any) => new Date(day.date).getDate() === date && new Date(day.date).getMonth() === monthNumber
      );
      return {
        date,
        state: dayData ? (dayData.status === "available" ? "available" : dayData.status === "crowded" ? "crowded" : "not_available") : "not_available",
        isSelected: false,
      };
    });

    const firstDayOfWeek = monthStart.getDay();
    const emptyDays = Array(firstDayOfWeek).fill(null);

    setCalendarData([...emptyDays, ...updatedData]);
  };

  const handleDayClick = (index: number) => {
    setCalendarData((prevData) => {
        const clickedDay = prevData[index];
        const isAlreadySelected = clickedDay.isSelected;

        if (!chaletDetails?.have_shifts) {
            if (isAlreadySelected) {
                // Deselect the clicked day
                const updatedDays = prevData.map((day, i) => {
                    if (i === index) {
                        // Remove from selected days
                        setSelectedDaysWithoutShifts((prev) =>
                            prev.filter((selectedDay) => selectedDay.date !== day.date)
                        );
                        return { ...day, isSelected: false };
                    }
                    return day;
                });
                return updatedDays;
            } else {
                // Select the clicked day
                const updatedDays = prevData.map((day, i) => {
                    if (i === index) {
                        // Add to selected days
                        setSelectedDaysWithoutShifts((prev) => [...prev, day]);
                        return { ...day, isSelected: true };
                    }
                    return day;
                });
                return updatedDays;
            }
        } else {
            // If have_shifts is true, allow single selection
            return prevData.map((day, i) => {
                if (i === index) {
                    return { ...day, isSelected: !day?.isSelected };
                }
                return { ...day, isSelected: false };
            });
        }
    });

    // Update selected date only if have_shifts is true
    if (chaletDetails?.have_shifts) {
        const clickedDay = calendarData[index + 1]?.date || null;
        if (clickedDay) {
            const [monthName, year] = monthNames[selectedMonthIndex].split(" ");
            const monthNumber = new Date(`${monthName} 1, ${year}`).getMonth();
            const selectedFullDate = new Date(Number(year), monthNumber, clickedDay);
            const formattedDate = selectedFullDate.toISOString().split("T")[0];
            setSelectedDate(formattedDate);
        } else {
            setSelectedDate(null);
        }
    }
};

  
  
  const handleMonthChange = (direction: "next" | "prev") => {
    const newIndex = direction === "next" ? selectedMonthIndex + 1 : selectedMonthIndex - 1;
    if (newIndex >= 0 && newIndex < monthNames.length) {
      setSelectedMonthIndex(newIndex);
      generateCalendarDays(newIndex, monthNames);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="flex flex-col gap-5 w-full md:w-[70%]">
          <div className="bg-bgNew flex flex-col justify-center gap-1 rounded-tl-[40px] rounded-tr-[40px] items-center py-3">
            <div className="border shadow-sm rounded-xl py-2 px-5">
              <span className="font-normal text-[17px]">2024</span>
            </div>
            <div className="relative">
              <div className="font-medium text-lg cursor-pointer text-mainBlack flex justify-center gap-1 items-center">
                {monthNames[selectedMonthIndex]}
                <img
                  onClick={() => handleMonthChange("next")}
                  src={rightArrow}
                  alt="rightArrow"
                  className="w-4 h-4 rotate-[90deg] mt-2 cursor-pointer"
                />
                <img
                  onClick={() => handleMonthChange("prev")}
                  src={rightArrow}
                  alt="leftArrow"
                  className="w-4 h-4 rotate-[-90deg] mt-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <DaysGrid calendarData={calendarData} onDayClick={handleDayClick} have_shifts={chaletDetails?.have_shifts} />
        </div>
        <div className="w-80">
          <ShiftsSidePanel shifts={shifts} have_shifts={chaletDetails?.have_shifts} selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}
