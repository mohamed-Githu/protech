import Image from "next/image";

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
      <div
        key={service.title}
        className={`flex items-center justify-between mb-96 lg:mb-52 lg:flex-col lg:space-y-16 ${
          i % 2 === 1 ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 max-w-md">
          <div className="w-72 md:w-56 shadow-1 rounded-5 h-20 md:h-16 flex items-center justify-center">
            <Typography variant="h2" className="text-primary-dark text-center sm:text-xl">
              {service.title}
            </Typography>
          </div>
          <Typography variant="p2" className="text-grey text-center lg:text-lg">
            {service.paragraph}
          </Typography>
        </div>
        <div className="max-w-lg">
          <Image
            src={service.image.src}
            width={service.image.width}
            height={service.image.height}
          />
        </div>
      </div>
    ))}
  </div>
);

export default ServicesSection;
