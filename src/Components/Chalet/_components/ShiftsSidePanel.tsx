import { useState } from "react";

interface Shift {
  id: number;
  time_from: string;
  time_to: string;
  price: number;
}

interface ShiftsSidePanelProps {
  shifts: Shift[];
  selectedDate: any;
  have_shifts: any;
}

export default function ShiftsSidePanel({
  shifts,
  selectedDate,
  have_shifts,
}: ShiftsSidePanelProps) {
  const [selectedShiftIndexes, setSelectedShiftIndexes] = useState<number[]>([]);
  const [errShiftMessage, setErrShiftMessage] = useState<boolean>(false);

  const handleShiftClick = (index: number) => {
    const newSelectedShifts = selectedShiftIndexes.includes(index)
      ? selectedShiftIndexes.filter((i) => i !== index)
      : [...selectedShiftIndexes, index];

    // Sort selected indexes to check if they follow valid patterns
    const sortedShifts = newSelectedShifts.sort((a, b) => a - b);

    // Only validate if there are two or more selected shifts
    if (sortedShifts.length > 1) {
      const isValidSelection =
        sortedShifts.length === 3 || // All three shifts are selected
        (sortedShifts.length === 2 &&
          (sortedShifts[1] - sortedShifts[0] === 1)); // Adjacent shifts only

      if (isValidSelection) {
        setSelectedShiftIndexes(newSelectedShifts);
        setErrShiftMessage(false);
      } else {
        setErrShiftMessage(true);
      }
    } else {
      // No validation needed for a single selected shift
      setSelectedShiftIndexes(newSelectedShifts);
    }
  };

  return (
    <>
    {selectedDate !== null &&
    <div>
      <h3 className="font-medium text-[17px] text-mainBlack">
        {have_shifts && "Available Shifts"}
      </h3>
      <p className="text-mainBlack font-normal text-xs py-3">
        {have_shifts && (selectedDate || "You should choose a day to display the shifts")}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {shifts?.map((shift, index) => (
          <div key={shift.id} className="relative">
            <div
              onClick={() => handleShiftClick(index)}
              className={`p-2 border border-mainBlack rounded-xl ${
                selectedShiftIndexes.includes(index) ? "activePayment" : ""
              }`}
            >
              <h4 className="font-medium mb-2">Shift {shift.id}</h4>
              <p className="text-sm text-gray-600 mb-2">{shift?.time_from}</p>
              <p className="text-sm text-gray-600 mb-2">{shift?.time_to}</p>
              <p className="font-bold">{shift.price} IQD</p>
            </div>
          </div>
        ))}
      </div>
      {!!errShiftMessage && <p className="text-red font-normal text-xs mt-4">You can't select non-adjacent shifts</p>}
    </div>
    }
    </>
  );
}
