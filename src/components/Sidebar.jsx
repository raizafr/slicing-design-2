import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import SidebarLinkMobile from "./SidebarLinkMobile";

const Sidebar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  return (
    <>
      <nav className="bg-side-mobile md:bg-side-desktop md:h-screen h-56 bg-cover bg-center bg-no-repeat bg-origin-content md:w-96 pt-0.5 -mt-1 md:mt-0 md:pt-0 rounded-r-lg">
        <div className="space-y-6 mt-10 hidden md:block">
          <SidebarLink
            number="1"
            step="STEP 1"
            info="YOUR INFO"
            active={currentUrl === "/" ? "active" : "non-active"}
            link="/"
          />
          <SidebarLink
            number="2"
            step="STEP 2"
            info="SELECT PLAN"
            active={currentUrl === "/select-plan" ? "active" : "non-active"}
            link="/select-plan"
          />
          <SidebarLink
            number="3"
            step="STEP 3"
            info="ADD-ONS"
            active={currentUrl === "/add-ons" ? "active" : "non-active"}
            link="/add-ons"
          />
          <SidebarLink
            number="4"
            step="STEP 4"
            info="SUMMARY"
            active={currentUrl === "/summary" ? "active" : "non-active"}
            link="/summary"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-10 md:hidden">
          <SidebarLinkMobile
            number="1"
            active={currentUrl === "/" ? "active" : "non-active"}
            link="/"
          />
          <SidebarLinkMobile
            number="2"
            active={currentUrl === "/select-plan" ? "active" : "non-active"}
            link="/select-plan"
          />
          <SidebarLinkMobile
            number="3"
            active={currentUrl === "/add-ons" ? "active" : "non-active"}
            link="/add-ons"
          />
          <SidebarLinkMobile
            number="4"
            active={currentUrl === "/summary" ? "active" : "non-active"}
            link="/summary"
          />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
