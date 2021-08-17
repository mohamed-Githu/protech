import Image from "next/image";

import Typography from "../ui/typography.ui";
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

const AboutSection = () => (
  <div
    className="py-64 sm:py-44 max-w-1180 mx-auto space-y-80 sm:space-y-52 px-4 xs:px-2"
    id="about"
  >
    <div className="flex justify-between lg:flex-col lg:items-center lg:space-y-20">
      <div className="max-w-md flex flex-col items-start lg:items-center">
        <Typography
          variant="h1"
          underline
          className="text-primary-dark lg:text-center sm:text-3xl"
        >
          About Us
        </Typography>
        <Typography
          variant="p"
          className="text-grey mt-14 lg:mt-5 lg:text-center"
        >
          We have a team of experts in with a vast array of skills that
          garantees you the best outcome you might or might not imagin.
        </Typography>
      </div>
      <div className="max-w-lg">
        <Image
          src="/images/about/about.svg"
          width={627}
          height={497}
          className="object-contain"
        />
      </div>
    </div>
    <div className="flex justify-between lg:flex-col lg:items-center lg:space-y-20">
      <div className="max-w-md flex flex-col items-start lg:items-center">
        <Typography
          variant="h1"
          underline
          className="text-primary-dark lg:text-center sm:text-3xl"
        >
          What clients say about us
        </Typography>
        <Typography
          variant="p"
          className="text-grey mt-14 lg:text-center lg:mt-5"
        >
          Our clients love the work we do. That’s why they keep coming back for
          more exciting websites and mobile applications. What are you waiting
          for ?!
        </Typography>
      </div>
      <div className="max-w-lg space-y-6 flex flex-col">
        {testimonials.map((testimonial) => (
          <TestimonialBlock key={testimonial.auther.name} {...testimonial} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutSection;
