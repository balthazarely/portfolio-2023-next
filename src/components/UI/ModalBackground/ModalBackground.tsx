import { UIContext } from "lib/context";
import React, { useContext } from "react";

export function ModalBackground() {
  const { state, dispatch } = useContext(UIContext);

  return (
    <div
      className={` pointer-events-none ${
        state.selectedProject ? "opacity-50" : "opacity-0"
      }  duration-20 fixed left-0 top-0 z-40 h-full w-full cursor-pointer bg-black/50 transition-opacity`}
    ></div>
  );
}
