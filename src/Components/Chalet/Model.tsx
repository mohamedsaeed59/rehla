import close from "../../assets/icons/close.svg";
import chaletDetails from "../../assets/chalet-details.jfif";
export default function Model() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-[8px] bg-black/50 z-50 overflow-hidden">
      <div className="container py-6">
        <div className="flex justify-end">
          <div className="w-fit bg-white rounded-full cursor-pointer">
            <img src={close} alt="close" className="w-10 h-10" />
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img
            src={chaletDetails}
            alt="chaletDetails"
            className="w-full h-full max-h-[580px] rounded-2xl my-4"
          />
          <div className="absolute left-0 top-1/2">fffffffffffffffffffffffffffff</div>
        </div>
      </div>
    </div>
  );
}
