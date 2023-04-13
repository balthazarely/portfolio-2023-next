import { UIContext } from "lib/context";
import React, { useContext, useEffect } from "react";

export function Layout({ children }: any) {
  const { state } = useContext(UIContext);

  useEffect(() => {
    console.log(state.selectedProject);
  }, [state]);

  return (
    <div
      className={`${
        state.navDrawerOpen || state.selectedProject ? "blur-bg " : ""
      } transition-all duration-500`}
    >
      {children}
    </div>
  );
}
