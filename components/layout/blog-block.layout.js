import Image from "next/image";

import SecondaryLink from "../ui/secondary-link.ui";
import Typography from "../ui/typography.ui";

const BlogBlock = ({ content, date, image }) => (
  <div className="bg-white rounded-8 h-80 shadow-1 flex flex-col">
    <div className="w-full h-48 relative">
      <Image
        src={image}
        layout="fill"
        className="object-cover rounded-t-5 h-full w-full"
      />
    </div>
    <div className="p-3 flex flex-col flex-grow">
      <Typography variant="caption" className="text-grey">
        {date}
      </Typography>
      <Typography variant="p3" className="text-grey mt-5 truncate">
        {content}
      </Typography>
      <div className="self-end mt-auto">
      <SecondaryLink>Read more</SecondaryLink>

      </div>
    </div>
  </div>
);

export default BlogBlock;
