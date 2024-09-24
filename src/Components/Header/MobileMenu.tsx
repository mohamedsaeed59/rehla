import { memo } from "react";

type mobileMenu = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

function MobileMenu({ isOpen, setOpen }: mobileMenu) {
  const handleClose = () => {
      setOpen(false);
    
  };

  return (
    <div
      className={`fixed z-10 ${
        isOpen ? "rtl:left-0 ltr:right-0" : "rtl:-right-full ltr:-left-full"
      } duration-200 w-full px-4 py-8 md:w-1/2 h-screen bg-white shadow-shadow`}
    >
      <div className="p-2">
        <div className="text-end">
          <button onClick={handleClose} className="text-xl">x</button>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
