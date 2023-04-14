import { UIContext } from "lib/context";
import { useEscapeKeyPress } from "lib/hooks";
import React, { useContext } from "react";

export function Layout({ children }: any) {
  const { state, dispatch } = useContext(UIContext);

  useEscapeKeyPress(() => {
    dispatch({ type: "CLOSE_NAV_DRAWER" });
    dispatch({ type: "CLEAR_SELECTED_PROJECT" });
  });

  return (
    <>
      <div
        onClick={() => dispatch({ type: "CLOSE_NAV_DRAWER" })}
        className={`click-target fixed left-0 top-0 z-20 h-full w-full ${
          state.navDrawerOpen || state.selectedProject
            ? " pointer-events-auto"
            : "pointer-events-none"
        }`}
      ></div>
      <div
        className={`${
          state.navDrawerOpen || state.selectedProject ? "blur-bg " : ""
        } z-10 transition-all duration-500`}
      >
        {children}
      </div>
    </>
  );
}
