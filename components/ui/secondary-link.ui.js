import { ArrowRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Typography from "./typography.ui";

const SecondaryLink = ({ children }) => {
  const [hover, setHover] = useState(false);

  return (
    <Typography
      variant="link2"
      className="text-primary-dark flex items-center space-x-1 border-b border-primary-dark border-opacity-0 hover:border-opacity-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{children}</span>
      <ArrowRightIcon
        className={`text-primary-dark cursor-pointer h-4 duration-200 transform ${
          hover && "translate-x-0.5"
        }`}
      />
    </Typography>
  );
};

export default SecondaryLink;
