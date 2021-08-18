import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Typography from "../ui/typography.ui";
import { useEffect } from "react";

const ServiceBlock = ({ title, paragraph, image, reverse }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const imageAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const paragraphAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imageAnimation.start({
        scale: 1,
        transition: { duration: 1, type: "spring", bounce: 0.3 },
      });
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.8, type: "spring", bounce: 0 },
      });
      paragraphAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1, type: "spring", bounce: 0 },
      });
    } else {
      imageAnimation.start({
        scale: 0,
      });
      titleAnimation.start({
        y: 20,
        opacity: 0,
      });
      paragraphAnimation.start({
        y: 20,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div
      className={`flex items-center justify-between mb-96 lg:mb-52 lg:flex-col lg:space-y-16 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
      ref={ref}
    >
      <div className="flex flex-col items-center space-y-6 max-w-md">
        <motion.div
          animate={titleAnimation}
          className="w-72 md:w-56 shadow-1 rounded-5 h-20 md:h-16 flex items-center justify-center"
        >
          <Typography
            variant="h2"
            className="text-primary-dark text-center sm:text-xl"
          >
            {title}
          </Typography>
        </motion.div>
        <motion.div animate={paragraphAnimation}>
          <Typography variant="p2" className="text-grey text-center lg:text-lg">
            {paragraph}
          </Typography>
        </motion.div>
      </div>
      <motion.div animate={imageAnimation} className="max-w-lg">
        <Image src={image.src} width={image.width} height={image.height} />
      </motion.div>
    </div>
  );
};

export default ServiceBlock;
