
export default function Thumbnails({ gallery }: any) {
  return (
    <div className="flex flex-row lg:flex-col gap-3 items-center">
      {gallery?.map((imageUrl: string) => (
        <img
          src={imageUrl}
          alt="chaletDetails"
          className="w-[56px] h-[56px] rounded-[15px] cursor-pointer border-[2px] border-mainBlack"
        />
       ))}
  </div>
  )
}