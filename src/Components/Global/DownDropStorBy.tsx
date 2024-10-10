export default function DownDropStorBy() {
  // top-6
  return (
    <div className="absolute top-1 w-[300px] rounded-[30px] z-20 rtl:left-0 ltr:right-0 bg-white shadow-lg p-2 md:p-3">
      <ul className="w-full flex flex-col gap-2 p-2">
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" />
            {/* for */}
            <label className="text-base font-normal">
              Price ( Low to high)
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" checked/>
            <label className="text-base font-normal">
              Price ( high to Low )
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" />
            <label className="text-base font-normal">Alphabet (A-Z)</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" />
            <label className="text-base font-normal">Alphabet (Z-A)</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" />
            <label className="text-base font-normal">Rate (high to low)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="html" value="HTML" />
            <label className="text-base font-normal">Rate (low to high)</label>
          </div>
        </li>
      </ul>
    </div>
  );
}
