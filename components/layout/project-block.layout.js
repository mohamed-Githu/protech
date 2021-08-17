import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";

import Typography from "../ui/typography.ui";

const ProjectBlock = ({ image, link, className, title, type }) => (
  <div
    className={`rounded-30 p-0 box-border shadow-1 overflow-hidden cursor-pointer relative ${
      type === "mobile" ? "h-500 lg:h-350" : "h-300"
    } ${className}`}
  >
    <div
      className={`w-600 max-w-full ${
        type === "mobile" ? "h-500 lg:h-350" : "h-300"
      } relative`}
    >
      <Image src={image} layout="fill" className="object-cover " />
    </div>
    <div className="absolute inset-0 bg-black flex items-center justify-center space-x-4 opacity-0 hover:opacity-70 duration-500">
      <Typography variant="p2" className="text-white">
        {title}
      </Typography>
      <ExternalLinkIcon className="h-7 text-white" />
    </div>
  </div>
);

export default ProjectBlock;
