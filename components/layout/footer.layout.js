import Logo from "../ui/logo.ui";
import Typography from "../ui/typography.ui";
import NavTabs from "./nav-tabs.layout";

const Footer = () => (
  <footer className="bg-primary-dark flex flex-col space-y-5 items-center pb-7 pt-72 px-4 sm:px-2">
    <Logo />
    <NavTabs />
    <div className="flex pt-5 space-x-7 sm:flex-col sm:space-x-0 sm:items-center sm:space-y-2 sm:pt-0">
      <Typography variant="link1" className="text-white opacity-80">
        © Copyright ProTech 2021
      </Typography>
      <Typography variant="link1" className="text-white opacity-80 text-center">
        Designed and developed by : Mohamed Hussein
      </Typography>
    </div>
  </footer>
);

export default Footer;
