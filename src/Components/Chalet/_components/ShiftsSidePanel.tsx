interface Shift {
  id: number;
  time: string;
  price: number;
}

interface ShiftsSidePanelProps {
  shifts: Shift[];
}

export default function ShiftsSidePanel({ shifts }: ShiftsSidePanelProps) {
  return (
    <div>
      <h3 className="font-medium text-[17px] text-mainBlack">
        Available Shifts
      </h3>
      <p className="text-mainBlack font-normal text-xs py-3">18/09/2024</p>

      <div className="grid grid-cols-3 gap-4">
        {shifts.map((shift) => (
          <div key={shift.id} className="relative">
            <div
              className="p-2 border border-mainBlack rounded-xl activePayment"
            >
              <h4 className="font-medium mb-2">Shift {shift.id}</h4>
              <p className="text-sm text-gray-600 mb-2">{shift.time}</p>
              <p className="font-bold">{shift.price} IQD</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
