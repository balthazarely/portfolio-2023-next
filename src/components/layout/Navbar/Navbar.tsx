import { LayoutGroup, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { PageWrapper } from "../PageWrapper";
import { Link, Events } from "react-scroll";
import { Cross as Hamburger } from "hamburger-react";
import { UIContext } from "lib/context";
import { DarkModeToggle } from "@/components/UI";

export function Navbar({ activeSection }: any) {
  const menuItems = ["about", "projects", "links", "contact"];
  const [selected, setSelected] = useState(0);
  const [hideNavUnderline, setHideNavUnderline] = useState(false);
  const { state, dispatch } = useContext(UIContext);

  const toggleDrawer = () => {
    if (!state.navDrawerOpen) {
      dispatch({ type: "OPEN_NAV_DRAWER" });
    } else {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  return (
    <div className="fixed z-30 h-24 w-full bg-base-100 py-6 ">
      <PageWrapper className="flex items-center justify-between">
        <div className="cursor-pointer text-3xl font-bold">
          <Link offset={-100} to="hero" smooth={true} duration={350}>
            balthazar<span className="text-4xl text-primary">.</span>
          </Link>
        </div>
        <div className="block  sm:hidden">
          <Hamburger toggle={toggleDrawer} />
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

                  <Link offset={-50} to={section} smooth={false} duration={50}>
                    {section}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </LayoutGroup>
          <DarkModeToggle />
        </div>
      </PageWrapper>
    </div>
  );
}
