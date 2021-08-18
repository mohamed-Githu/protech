import { useContext } from "react";

import { drawerContext } from "../../context/drawer.context";
import NavTabs from "./nav-tabs.layout";

const Drawer = () => {
  const { open } = useContext(drawerContext);

  return (
    <div
      className={`fixed h-screen w-full bg-primary-dark flex items-center justify-center z-30 transition-all animate-swipe origin-top ${
        !open && "hidden"
      }`}
    >
      <div className="animate-appear">
        <NavTabs column />
      </div>
    </div>
  );
};

export default Drawer;
