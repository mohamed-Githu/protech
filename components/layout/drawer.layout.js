import { useContext } from "react";

import { drawerContext } from "../../context/drawer.context";
import NavTabs from "./nav-tabs.layout";

const Drawer = () => {
  const { open } = useContext(drawerContext);

  return (
    <div
      className={`fixed h-screen w-full bg-primary-dark flex items-center justify-center z-30 transition-all duration-300 ${
        !open && "hidden"
      }`}
    >
      <div className="duration-300 animate-appear scale-125">
        <NavTabs column />
      </div>
    </div>
  );
};

export default Drawer;
