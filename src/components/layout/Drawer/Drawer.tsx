import { UIContext } from "lib/context";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
// import { Link } from "react-scroll";
import { Link as ScrollLink, scroller } from "react-scroll";

import Link from "next/link";

import { useWindowSize } from "react-use";
import { DarkModeToggle } from "@/components/UI";
import { useRouter } from "next/router";

export function Drawer() {
  const { state, dispatch } = useContext(UIContext);
  const { width } = useWindowSize();
  const menuItems = ["about", "projects", "links", "contact"];
  const router = useRouter();

  useEffect(() => {
    if (width > 640) {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  }, [width, state.navDrawerOpen, dispatch]);

  const menuOpenAnimationVariant = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        type: "spring",
        ease: "easeInOut",
        bounce: 0.15,
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
    open: {
      x: "-18.7rem",
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.25,
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const containerInnerElements = {
    closed: {
      x: 10,
      opacity: 0,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.35,
      },
    },
  };

  const toggleHamburger = () => {
    if (!state.navDrawerOpen) {
      dispatch({ type: "OPEN_NAV_DRAWER" });
    } else {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  const toggleDrawer = (section: string) => {
    if (router.pathname !== "/") {
      setTimeout(() => scrollToElement(section), 500);
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    } else {
      scrollToElement(section);
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  const scrollToElement = (elementId: string) => {
    scroller.scrollTo(elementId, {
      duration: 50,
      delay: 0,
      smooth: false,
      offset: -50,
    });
  };

  return (
    <>
      <motion.div
        animate={state.navDrawerOpen ? "open" : "closed"}
        variants={menuOpenAnimationVariant}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed -right-80  top-0 z-[70] h-screen w-full max-w-xs bg-base-100 p-5  shadow-lg"
      >
        <div className="mt-1 flex w-full justify-end px-4">
          <Hamburger toggled={state.navDrawerOpen} toggle={toggleHamburger} />
        </div>
        {menuItems.map((section: string, idx: number) => {
          return (
            <motion.div
              key={idx}
              className="mr-6  py-1"
              variants={containerInnerElements}
            >
              <Link
                scroll={false}
                href={`/#${section}`}
                onClick={() => toggleDrawer(section)}
              >
                <button className="btn-primary btn-ghost btn flex w-full  justify-start rounded-none lowercase">
                  {section}
                </button>
              </Link>
            </motion.div>
          );
        })}

        <motion.div
          className="mr-6 py-1 pl-4  "
          variants={containerInnerElements}
        >
          <DarkModeToggle />
        </motion.div>
      </motion.div>
    </>
  );
}
