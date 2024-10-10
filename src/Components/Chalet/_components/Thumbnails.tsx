import chaletDetails from "../../../assets/chalet-details.jfif";

export default function Thumbnails() {
  return (
    <div className="flex flex-row lg:flex-col gap-3 items-center">
    <img
      src={chaletDetails}
      alt="chaletDetails"
      className="w-[56px] h-[56px] rounded-[15px] cursor-pointer border-[2px] border-mainBlack"
    />
    <img
      src={chaletDetails}
      alt="chaletDetails"
      className="w-[56px] h-[56px] rounded-[15px] cursor-pointer"
    />
    <img
      src={chaletDetails}
      alt="chaletDetails"
      className="w-[56px] h-[56px] rounded-[15px] cursor-pointer"
    />
  </div>
  )
}
