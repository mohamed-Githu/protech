import Image from "next/image";
import ServiceBlock from "../layout/service-block.layout";

import Typography from "../ui/typography.ui";

const services = [
  {
    title: "Web Development",
    paragraph: `We create highly scalable user interfaces with a rich user experience and very optimized for SEO.`,
    image: {
      src: "/images/services/services1.svg",
      width: 505,
      height: 417.91,
    },
  },
  {
    title: "Android & IOS Development",
    paragraph: `Extend functionality and with our team that will help you create cross platform mobile app.`,
    image: {
      src: "/images/services/services2.svg",
      width: 444.05,
      height: 685.02,
    },
  },
  {
    title: "SEO",
    paragraph: `Our websites and web applications are highly optimized for search engines which gives you the priority over competents.`,
    image: {
      src: "/images/services/services3.svg",
      width: 498,
      height: 289.42,
    },
  },
];

const ServicesSection = () => (
  <div className="max-w-1180 mx-auto pt-48 px-4 xs:px-2" id="services">
    <Typography variant="h1" className="text-primary-dark mb-72 text-center">
      Our Services
    </Typography>
    {services.map((service, i) => (
      <ServiceBlock {...service} key={`service-${i}`} reverse={i % 2 === 1} />
    ))}
  </div>
);

export default ServicesSection;
