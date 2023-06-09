import { UIContext } from "lib/context";
import { useEscapeKeyPress } from "lib/hooks";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ILayout {
  children: React.ReactNode;
  route: string;
}

export function Layout({ children, route }: ILayout) {
  const { state, dispatch } = useContext(UIContext);

  useEscapeKeyPress(() => {
    dispatch({ type: "CLOSE_NAV_DRAWER" });
    dispatch({ type: "CLEAR_SELECTED_PROJECT" });
  });

  return (
    <>
      <div
        onClick={() => dispatch({ type: "CLOSE_NAV_DRAWER" })}
        className={`click-target fixed left-0 top-0 z-20 h-full w-full bg-neutral transition-all duration-500 ${
          state.navDrawerOpen || state.selectedProject
            ? " pointer-events-auto cursor-pointer bg-neutral bg-opacity-30"
            : "pointer-events-none bg-opacity-0"
        }`}
      ></div>
      <AnimatePresence mode="wait">
        <motion.div
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className={`${
            state.navDrawerOpen || state.selectedProject ? " " : ""
          } z-50  `}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
