import { useContext, useState } from "react";
import { drawerContext } from "../../context/drawer.context";

import Typography from "./typography.ui";

const PrimaryLink = ({ children, id }) => {
  const { setOpen } = useContext(drawerContext);
  const [hover, setHover] = useState(false);

  const onNav = () => {
    document.querySelector("#" + id).scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div
      className="relative sm:p-5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onNav}
    >
      <Typography variant="link1" className="text-white">
        {children}
      </Typography>
      <div
        className={`h-0.5 duration-300 transition-all rounded-full bg-primary absolute bottom-0 left-0 ${
          hover ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

export default PrimaryLink;
