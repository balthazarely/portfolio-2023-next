import { UIContext } from "lib/context";
import { useLockBodyScroll } from "lib/hooks";
import React, { useContext } from "react";

export function Drawer() {
  const { state, dispatch } = useContext(UIContext);

  useLockBodyScroll(state.navDrawerOpen);

  return (
    <div
      className={`fixed z-40 h-screen w-full bg-lime-300 ${
        state.navDrawerOpen ? "visible" : "invisible"
      }`}
    >
      Drawer
    </div>
  );
}
