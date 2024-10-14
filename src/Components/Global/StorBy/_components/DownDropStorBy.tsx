export default function DownDropStorBy() {

  return (
    <div className="absolute top-10 w-[290px] md:w-[300px] rounded-[30px] z-20 rtl:left-0 ltr:right-0 bg-white shadow-lg p-2 md:p-3">
      <ul className="w-full flex flex-col gap-2 p-2">
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="low" value="" name="result" className="cursor-pointer"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="low">
              Price ( Low to high)
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1">
            <input type="radio" id="high" value="" name="result" className="cursor-pointer"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="high">
              Price ( high to Low )
            </label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="alphabet" value="" className="cursor-pointer" name="result" />
            <label className="text-base font-normal cursor-pointer" htmlFor="alphabet">Alphabet (A-Z)</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="alphabet2" value="" className="cursor-pointer" name="result" />
            <label className="text-base font-normal cursor-pointer" htmlFor="alphabet2">Alphabet (Z-A)</label>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="rate" value="" className="cursor-pointer" name="result"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="rate">Rate (high to low)</label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-1 cursor-pointer">
            <input type="radio" id="rate2" value="" className="cursor-pointer" name="result"/>
            <label className="text-base font-normal cursor-pointer" htmlFor="rate2">Rate (low to high)</label>
          </div>
        </li>
      </ul>
    </div>
  );
}
