import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SecondaryLink from "../ui/secondary-link.ui";
import Typography from "../ui/typography.ui";

const BlogBlock = ({ content, date, image }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring" },
      });
    } else {
      animation.start({
        y: 20,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      className="bg-white rounded-8 h-80 shadow-1 flex flex-col"
    >
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
    </motion.div>
  );
};

export default BlogBlock;
