import { LayoutGroup, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { PageWrapper } from "../PageWrapper";
import { Link, Events } from "react-scroll";
import { Cross as Hamburger } from "hamburger-react";
import { UIContext } from "lib/context";

export function Navbar({ activeSection, setActiveSection }: any) {
  const [isChecked, setIsChecked] = useState(false);
  const menuItems = ["about", "projects"];
  const [selected, setSelected] = useState(0);
  const [hideNavUnderline, setHideNavUnderline] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { dispatch } = useContext(UIContext);

  const toggleDrawer = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      dispatch({ type: "OPEN_NAV_DRAWER" });
    } else {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = (to: any, direction: any) => {
    if (to === "contact" || to == "hero") {
      setHideNavUnderline(true);
    } else {
      setHideNavUnderline(false);
    }
    console.log(isScrolling, "isScrolling", to);
    setIsScrolling(true);
  };

  const handleScrollEnd = () => {
    console.log(isScrolling, "isNOTScrolling");

    setIsScrolling(false);
  };

  Events.scrollEvent.register("begin", handleScroll);
  Events.scrollEvent.register("end", handleScrollEnd);

  useEffect(() => {
    if (isChecked) {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "light");
    }
  }, [isChecked]);

  return (
    <div className="fixed z-50 h-24 w-full bg-base-100 py-6 ">
      <PageWrapper className="flex items-center justify-between">
        <div className="cursor-pointer text-3xl font-bold">
          <Link offset={-100} to="hero" smooth={true} duration={350}>
            balthazar<span className="text-4xl text-primary">.</span>
          </Link>
        </div>
        <div className="block border-2 border-red-200 sm:hidden">
          <Hamburger toggled={mobileMenuOpen} toggle={toggleDrawer} />
        </div>
        <div className="hidden items-center gap-8 sm:flex">
          <LayoutGroup>
            <ul className="flex  items-center gap-8 sm:flex">
              {menuItems.map((section, i) => (
                <motion.li
                  animate
                  key={i}
                  className={`relative ${
                    i === selected && "selected"
                  } cursor-pointer text-sm font-semibold`}
                >
                  {activeSection === section && !hideNavUnderline && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute -bottom-1 h-1 w-full bg-primary underline`}
                    />
                  )}
                  <Link offset={-100} to={section} smooth={true} duration={350}>
                    {section}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <Link
            offset={-100}
            spy={true}
            to="contact"
            smooth={true}
            duration={350}
          >
            <button className="btn-primary btn lowercase">Contact</button>
          </Link>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={(e) => setIsChecked(e.target.checked)}
            />

            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </PageWrapper>
    </div>
  );
}
