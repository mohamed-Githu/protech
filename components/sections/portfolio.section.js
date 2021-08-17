import { useEffect, useState } from "react";

import Button from "../ui/button.ui";
import Typography from "../ui/typography.ui";
import ProjectBlock from "../layout/project-block.layout";

const projects = [
  {
    type: "mobile",
    title: "mobile 1",
    image: "/images/portfolio/mobile1.jpg",
    link: "",
  },
  {
    type: "mobile",
    title: "mobile 2",
    image: "/images/portfolio/mobile2.jpg",
    link: "",
  },
  {
    type: "mobile",
    title: "mobile 3",
    image: "/images/portfolio/mobile3.jpg",
    link: "",
  },
  {
    type: "website",
    title: "website 1",
    image: "/images/portfolio/web1.jpg",
    link: "",
  },
  {
    type: "website",
    title: "website 2",
    image: "/images/portfolio/web2.jpg",
    link: "",
  },
  {
    type: "website",
    title: "website 3",
    image: "/images/portfolio/web3.jpg",
    link: "",
  },
];

const buttons = [
  {
    id: "all",
    text: "All work",
  },
  {
    id: "website",
    text: "Web",
  },
  {
    id: "mobile",
    text: "Mobile",
  },
];

const PortfolioSection = () => {
  const [workType, setWorkType] = useState("all");

  return (
    <div
      className={`bg-portfolio py-24 duration-500 px-4 xs:px-2 ${
        workType !== "all" && "-mb-532"
      }`}
      id="projects"
    >
      <div className="max-1180 mx-auto flex flex-col items-center">
        <Typography variant="h1" className="text-primary-dark" underline>
          Portfolio
        </Typography>
        <div className="space-x-8 mt-24 mb-16 xs:space-x-2 2xs:space-x-0 2xs:flex-col 2xs:flex 2xs:space-y-4">
          {buttons.map(({ text, id }) => (
            <Button
              key={id}
              variant="p"
              radius="full"
              style={id === workType ? "fill" : "outline"}
              color={id === workType ? "white" : "blue"}
              onClick={() => setWorkType(id)}
            >
              {text}
            </Button>
          ))}
        </div>
        <div
          className={`grid grid-cols-6 sm:grid-cols-1 gap-8 md:gap-5 max-w-1180`}
        >
          {projects.map((project) => {
            const styles =
              project.type === "website"
                ? "col-span-3"
                : "col-span-2";

            return (
              <ProjectBlock
                key={project.title}
                {...project}
                className={`transition duration-500 transform ${styles} ${
                  project.type === workType || workType === "all"
                    ? ""
                    : "scale-0"
                } ${
                  workType === "website" &&
                  project.type === "website" &&
                  "-translate-y-532 lg:-translate-y-380 sm:-translate-y-1110"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
