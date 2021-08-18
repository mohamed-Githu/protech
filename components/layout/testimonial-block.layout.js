import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Typography from "../ui/typography.ui";

const TestimonialBlock = ({ auther, content, index, ref, inView }) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0,
          delay: 0.3 * index + 0.3,
        },
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
      className="w-full flex flex-col px-5 py-4 bg-white shadow-2 rounded-5"
    >
      <Typography variant="p3" className="text-grey mb-4">
        {content}
      </Typography>
      <div className="flex">
        <div className="flex mr-auto">
          <Image
            src={auther.image}
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col justify-center ml-3">
            <Typography variant="p" className="text-primary-dark">
              {auther.name}
            </Typography>
            <Typography variant="caption" className="text-primary-dark">
              {auther.position}
            </Typography>
          </div>
        </div>
        <div className="xs:hidden flex items-center justify-center">
          <Image src="/images/stars.svg" width={120} height={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialBlock;
