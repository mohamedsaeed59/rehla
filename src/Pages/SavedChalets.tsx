import { memo } from "react";
import Card from "../Components/Global/Card";
import StorBy from "../Components/Global/StorBy/StorBy";
import { useTranslation } from "react-i18next";

const SavedChalets = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <div className="flex flex-col gap-8 my-8">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] font-bold">
              15 <span className="text-ry3Text font-medium">{t("SavedChalets")}</span>
            </h3>

            <StorBy />
          </div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default memo(SavedChalets);

// import { memo, useState, useRef, useEffect } from "react";
// import Card from "../Components/Global/Card";
// import downDrop from "../assets/icons/arrow-down-drop.svg";
// import DownDropStorBy from "../Components/Global/DownDropStorBy";

// const SavedChalets = () => {
//   const [downDropStore, setDownDropStore] = useState<boolean>(true);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close the dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setDownDropStore(true); // Close the dropdown
//       }
//     };

//     // Add event listener for clicks outside
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       // Remove event listener on cleanup
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="flex flex-col gap-8 my-8">
//           <div className="flex justify-between items-center">
//             <h3 className="text-[18px] font-bold">
//               15 <span className="text-ry3Text font-medium">Saved Chalet</span>
//             </h3>
//             <div className="flex gap-4">
//               <div
//                 ref={dropdownRef}
//                 className="relative rounded-[8px] border border-black50 cursor-pointer"
//               >
//                 <div
//                   className="flex gap-2 p-2"
//                   onClick={() => setDownDropStore(!downDropStore)}
//                 >
//                   <p className="text-sm font-normal">Stor By</p>
//                   <img
//                     src={downDrop}
//                     alt="downDrop"
//                     className="w-6 h-6 object-cover"
//                   />
//                 </div>
//                 {!downDropStore && <DownDropStorBy />}
//               </div>
//             </div>
//           </div>
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </div>
//     </>
//   );
// };

// export default memo(SavedChalets);

/*
   <ul className="w-full">
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                           for 
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <input type="radio" id="html" value="HTML" />
                          <label>Come and book your favorite</label>
                        </div>
                      </li>
                    </ul>
*/
