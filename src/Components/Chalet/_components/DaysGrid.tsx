import DayCell from "./DayCell";

interface DayData {
  date: number;
  state: DayState;
  isSelected: boolean;
}
type DayState = "available" | "partial" | "unavailable";

interface DaysGridProps {
  calendarData: DayData[];
  onDayClick: (index: number) => void;
}

export default function DaysGrid({ calendarData, onDayClick }: DaysGridProps) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {calendarData.map((day, index) => (
        <DayCell
          key={index}
          date={day.date}
          dayOfWeek={daysOfWeek[index % 7]}
          state={day.state}
          isSelected={day.isSelected}
          onClick={() => onDayClick(index)}
        />
      ))}
    </div>
  );
}
