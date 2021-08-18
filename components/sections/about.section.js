import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Typography from "../ui/typography.ui";
import AboutBlock from "../layout/about-block.layou";
import TestimonialBlock from "../layout/testimonial-block.layout";

const testimonials = [
  {
    auther: {
      name: "Adam Smith",
      image: "/images/avatars/avatar1.jpg",
      position: "Founder of ComPass",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
  },
  {
    auther: {
      name: "Amanda Green",
      image: "/images/avatars/avatar2.jpg",
      position: "Founder of ComPass",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
  },
  {
    auther: {
      name: "Arther Shwarm",
      image: "/images/avatars/avatar3.jpg",
      position: "Founder of ComPass",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
  },
];

const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
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
        transition: { duration: 1, delay: 0.5, type: "spring" },
      });
      paragraphAnimation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.8, type: "spring" },
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
      className="max-w-1180 mx-auto space-y-80 sm:space-y-52 px-4 xs:px-2"
      id="about"
      ref={ref}
    >
      <AboutBlock
        title="About Us"
        paragraph="We have a team of experts in with a vast array of skills that
              garantees you the best outcome you might or might not imagin."
        image={{ src: "/images/about/about.svg", width: 627, height: 497 }}
      />
      <AboutBlock
        title="What clients say about us"
        paragraph="Our clients love the work we do. That’s why they keep coming back
              for more exciting websites and mobile applications. What are you
              waiting for ?!"
        testimonials={testimonials}
      />
    </div>
  );
};

export default AboutSection;
