import { useContext, useState } from "react";

import { drawerContext } from "../../context/drawer.context";

const NavMenu = () => {
  const { setOpen, open } = useContext(drawerContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="p-2 cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <div className="h-5 w-9 relative">
        <div
          className={`duration-300 left-0 bg-white h-0.5 absolute rounded-full top-0 w-2/3 ${
            hover && "translate-x-1/2"
          } ${open && "w-0"}`}
        />
        <div
          className={`duration-300 bg-white h-0.5 absolute rounded-full top-1/2 left-0 w-full transform -translate-y-1/2 ${
            open && "rotate-45"
          } ${open && hover && "rotate-30"}`}
        />
        <div
          className={`duration-300 bg-white h-0.5 absolute rounded-full top-1/2 left-0 w-full transform -translate-y-1/2 ${
            open && "-rotate-45"
          } ${open && hover && "-rotate-30"}`}
        />
        <div
          className={`duration-300 right-0 bg-white h-0.5 absolute rounded-full bottom-0 w-2/3 ${
            hover && "-translate-x-1/2"
          } ${open && "w-0"}`}
        />
      </div>
    </div>
  );
};

export default NavMenu;
