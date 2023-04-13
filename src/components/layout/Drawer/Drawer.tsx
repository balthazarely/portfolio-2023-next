import { UIContext } from "lib/context";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";
import { useWindowSize } from "react-use";

export function Drawer() {
  const { state, dispatch } = useContext(UIContext);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 640) {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  }, [width, state.navDrawerOpen]);

  const menuOpenAnimationVariant = {
    closed: {
      x: "100%",
      // display: "block",
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
      x: "20px",
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
  const toggleDrawer = () => {
    if (!state.navDrawerOpen) {
      dispatch({ type: "OPEN_NAV_DRAWER" });
    } else {
      dispatch({ type: "CLOSE_NAV_DRAWER" });
    }
  };

  return (
    <>
      <motion.div
        animate={state.navDrawerOpen ? "open" : "closed"}
        variants={menuOpenAnimationVariant}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed right-0 top-0 z-[70] h-screen w-full max-w-xs bg-base-100 p-5  shadow-lg"
      >
        <div className="flex w-full justify-end px-4">
          <Hamburger toggled={state.navDrawerOpen} toggle={toggleDrawer} />
        </div>
        <motion.div
          className="mr-6 mt-6  py-1"
          variants={containerInnerElements}
        >
          <Link
            offset={-100}
            to="about"
            smooth={true}
            duration={600}
            onClick={toggleDrawer}
          >
            <button className="btn-primary btn-ghost btn flex w-full  justify-start rounded-none lowercase">
              my work
            </button>
          </Link>
        </motion.div>
        <motion.div className="mr-6 py-1 " variants={containerInnerElements}>
          <Link
            offset={-100}
            to="projects"
            smooth={true}
            duration={600}
            onClick={toggleDrawer}
          >
            <button className="btn-primary btn-ghost btn flex w-full  justify-start rounded-none lowercase">
              projects
            </button>
          </Link>
        </motion.div>
        <motion.div className="mr-6 py-1" variants={containerInnerElements}>
          <Link
            offset={-100}
            to="links"
            smooth={true}
            duration={600}
            onClick={toggleDrawer}
          >
            <button className="btn-primary btn-ghost btn flex w-full  justify-start rounded-none lowercase">
              links
            </button>
          </Link>
        </motion.div>
        <motion.div className="mr-6 py-1  " variants={containerInnerElements}>
          <Link
            offset={-100}
            to="contact"
            smooth={true}
            duration={600}
            onClick={toggleDrawer}
          >
            <button className="btn-primary btn-ghost btn flex w-full  justify-start rounded-none lowercase">
              contact
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
