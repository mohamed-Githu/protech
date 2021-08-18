import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Typography from "../ui/typography.ui";
import TestimonialBlock from "./testimonial-block.layout";

const AboutBlock = ({ title, paragraph, image, testimonials }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const imageAnimation = useAnimation();
  const titleAnimation = useAnimation();
  const paragraphAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imageAnimation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring", bounce: 0.3 },
      });
      titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.8, type: "spring" },
      });
      paragraphAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1, type: "spring" },
      });
    } else {
      titleAnimation.start({
        y: 20,
        opacity: 0,
      });
      imageAnimation.start({
        x: 200,
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
      ref={ref}
      className="flex justify-between lg:flex-col lg:items-center lg:space-y-20 pt-72 sm:pt-40 pb-1 overflow-hidden"
    >
      <motion.div className="max-w-md flex flex-col items-start lg:items-center overflow-hidden">
        <motion.div animate={titleAnimation}>
          <Typography
            variant="h1"
            underline
            className="text-primary-dark lg:text-center sm:text-3xl"
          >
            {title}
          </Typography>
        </motion.div>
        <motion.div animate={paragraphAnimation}>
          <Typography
            variant="p"
            className="text-grey mt-14 lg:mt-5 lg:text-center"
          >
            {paragraph}
          </Typography>
        </motion.div>
      </motion.div>
      {image?.src ? (
        <motion.div animate={imageAnimation} className="max-w-lg">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            className="object-contain"
          />
        </motion.div>
      ) : (
        <div className="max-w-lg space-y-6 flex flex-col">
          {testimonials.map((testimonial, i) => (
            <TestimonialBlock
              ref={ref}
              inView={inView}
              index={i}
              key={testimonial.auther.name}
              {...testimonial}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutBlock;
