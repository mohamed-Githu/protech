import PrimaryLink from "../ui/primary-link.ui";

const tabs = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Services",
    id: "services",
  },
  {
    name: "Blog",
    id: "blog",
  },
  {
    name: "About Us",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const NavTabs = ({ className, column }) => (
  <div
    className={`space-x-10 flex items-center flex-wrap sm:space-x-0 sm:w-full sm:justify-center sm:flex-wrap ${className} ${
      column && "flex-col space-x-0 space-y-8"
    }`}
  >
    {tabs.map((tab) => (
      <PrimaryLink id={tab.id}>{tab.name}</PrimaryLink>
    ))}
  </div>
);

export default NavTabs;
