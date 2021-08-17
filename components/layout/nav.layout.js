import NavMenu from "../ui/nav-menu.ui";
import NavTabs from "./nav-tabs.layout";
import Logo from "../ui/logo.ui";

const Nav = () => (
  <div className="absolute top-8 w-full z-40 px-4 xs:px-2">
    <div className="flex justify-between items-center max-w-1180 mx-auto">
      <Logo />
      <div className="md:hidden">
        <NavTabs />
      </div>
      <div className="hidden md:block">
        <NavMenu />
      </div>
    </div>
  </div>
);

export default Nav;
